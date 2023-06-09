import { GetUserMetricsService } from '../get-user-metrics'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'

export function makeGetUserMetrics() {
  const checkInRepository = new PrismaCheckInsRepository()
  const useService = new GetUserMetricsService(checkInRepository)

  return useService
}
