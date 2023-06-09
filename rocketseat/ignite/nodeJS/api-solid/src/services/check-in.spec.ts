import { describe, it, beforeEach, expect, vi, afterEach } from 'vitest'

import { InMemoryCheckInRepository } from '@/repositories/in-memory/in-memory-check-in-repository'
import { CheckInService } from './check-in'
import { InMemoryGymRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { MaxDistanceError } from './error/max-distance-erros'
import { MaxNumberOfCheckInsError } from './error/max-number-of-check-ins-error'

let checkInsRepository: InMemoryCheckInRepository
let gymsRepository: InMemoryGymRepository
let sut: CheckInService

describe('Check-in Use Case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInRepository()
    gymsRepository = new InMemoryGymRepository()
    sut = new CheckInService(checkInsRepository, gymsRepository)

    await gymsRepository.create({
      id: 'gym-01',
      title: 'JavaScript Gym',
      description: '',
      phone: '',
      latitude: 0,
      longitude: 0,
    })

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      userID: 'user-01',
      gymID: 'gym-01',
      userLatitude: 0,
      userLongitude: 0,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      userID: 'user-01',
      gymID: 'gym-01',
      userLatitude: 0,
      userLongitude: 0,
    })

    await expect(() =>
      sut.execute({
        gymID: 'gym-01',
        userID: 'user-01',
        userLatitude: 0,
        userLongitude: 0,
      }),
    ).rejects.toBeInstanceOf(MaxNumberOfCheckInsError)
  })

  it('should be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      gymID: 'gym-01',
      userID: 'user-01',
      userLatitude: 0,
      userLongitude: 0,
    })

    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0))

    const { checkIn } = await sut.execute({
      gymID: 'gym-01',
      userID: 'user-01',
      userLatitude: 0,
      userLongitude: 0,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check on distant gym', async () => {
    await gymsRepository.create({
      id: 'gym-02',
      title: 'JavaScript Gym',
      description: '',
      phone: '',
      latitude: -25.5283397,
      longitude: -49.2700753,
    })

    await expect(() =>
      sut.execute({
        gymID: 'gym-02',
        userID: 'user-01',
        userLatitude: -25.5519754,
        userLongitude: -49.2537338,
      }),
    ).rejects.toBeInstanceOf(MaxDistanceError)
  })
})
