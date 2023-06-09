import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsService } from '../fetch-nearby-gyms'

export function makeFetchNearbyGyms() {
  const gymRepository = new PrismaGymsRepository()
  const useService = new FetchNearbyGymsService(gymRepository)

  return useService
}
