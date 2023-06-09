import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymService } from '../search-gyms'

export function makeSearchGyms() {
  const gymRepository = new PrismaGymsRepository()
  const useService = new SearchGymService(gymRepository)

  return useService
}
