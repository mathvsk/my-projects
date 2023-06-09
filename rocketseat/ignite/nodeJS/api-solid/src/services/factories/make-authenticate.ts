import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateService } from '../authenticate'

export function makeAuthenticateService() {
  const usersRepository = new PrismaUserRepository()
  const useService = new AuthenticateService(usersRepository)

  return useService
}
