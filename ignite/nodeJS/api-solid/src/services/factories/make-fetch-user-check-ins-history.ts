import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUsersCheckInsHistoryService } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckIns() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useService = new FetchUsersCheckInsHistoryService(checkInsRepository)

  return useService
}
