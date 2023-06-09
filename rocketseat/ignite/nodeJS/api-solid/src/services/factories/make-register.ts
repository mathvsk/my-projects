import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterService } from '../register'

export function makeRegisterService() {
  const usersRepository = new PrismaUserRepository()
  const useService = new RegisterService(usersRepository)

  return useService
}
