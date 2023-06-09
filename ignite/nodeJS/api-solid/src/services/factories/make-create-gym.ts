import { CreateGymService } from '../create-gym'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeCreateGym() {
  const gymRepository = new PrismaGymsRepository()
  const useService = new CreateGymService(gymRepository)

  return useService
}
