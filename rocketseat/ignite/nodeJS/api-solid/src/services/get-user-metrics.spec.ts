import { describe, it, beforeEach, expect } from 'vitest'

import { InMemoryCheckInRepository } from '@/repositories/in-memory/in-memory-check-in-repository'
import { GetUserMetricsService } from './get-user-metrics'

let checkInsRepository: InMemoryCheckInRepository
let sut: GetUserMetricsService

describe('Get User Metrics Use Case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInRepository()
    sut = new GetUserMetricsService(checkInsRepository)
  })

  it('should be able to get check-ins count from metrics', async () => {
    await checkInsRepository.create({
      user_id: 'user-01',
      gym_id: 'gym-01',
    })

    await checkInsRepository.create({
      user_id: 'user-01',
      gym_id: 'gym-02',
    })

    const { checkInsCount } = await sut.execute({
      userID: 'user-01',
    })

    expect(checkInsCount).toEqual(2)
  })
})
