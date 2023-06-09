import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CheckInService } from '../check-in'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeCheckIn() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const gymRepository = new PrismaGymsRepository()
  const useService = new CheckInService(checkInsRepository, gymRepository)

  return useService
}
