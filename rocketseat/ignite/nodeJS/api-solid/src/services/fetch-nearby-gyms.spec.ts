import { describe, it, beforeEach, expect } from 'vitest'

import { InMemoryGymRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsService } from './fetch-nearby-gyms'

let checkInsRepository: InMemoryGymRepository
let sut: FetchNearbyGymsService

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryGymRepository()
    sut = new FetchNearbyGymsService(checkInsRepository)
  })

  it('should be able to featch nearby gyms', async () => {
    await checkInsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -25.5283397,
      longitude: -49.2700753,
    })

    await checkInsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -35.5310945,
      longitude: -49.3119688,
    })

    const { gyms } = await sut.execute({
      userLatitude: -25.5283397,
      userLongitude: -49.2700753,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
