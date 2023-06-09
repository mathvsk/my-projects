import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInService } from '../validate-check-in'

export function makeValidateCheckIn() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useService = new ValidateCheckInService(checkInsRepository)

  return useService
}
