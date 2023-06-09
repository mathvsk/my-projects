import { describe, it, beforeEach, expect } from 'vitest'

import { SearchGymService } from './search-gyms'
import { InMemoryGymRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let checkInsRepository: InMemoryGymRepository
let sut: SearchGymService

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryGymRepository()
    sut = new SearchGymService(checkInsRepository)
  })

  it('should be able to search for gyms', async () => {
    await checkInsRepository.create({
      title: 'Gym 01',
      description: null,
      phone: null,
      latitude: 0,
      longitude: 0,
    })

    await checkInsRepository.create({
      title: 'Gym 02',
      description: null,
      phone: null,
      latitude: 0,
      longitude: 0,
    })

    const { gyms } = await sut.execute({
      query: 'Gym 01',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Gym 01' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await checkInsRepository.create({
        title: `Gym ${i}`,
        description: null,
        phone: null,
        latitude: 0,
        longitude: 0,
      })
    }

    const { gyms } = await sut.execute({
      query: 'Gym',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Gym 21' }),
      expect.objectContaining({ title: 'Gym 22' }),
    ])
  })
})
