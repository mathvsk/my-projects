import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymService } from './create-gym'

let gymsRepository: InMemoryGymRepository
let sut: CreateGymService

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymRepository()
    sut = new CreateGymService(gymsRepository)
  })

  it('should to register', async () => {
    const { gym } = await sut.execute({
      title: 'Javascript academy',
      description: null,
      phone: null,
      latitude: 0,
      longitude: 0,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
