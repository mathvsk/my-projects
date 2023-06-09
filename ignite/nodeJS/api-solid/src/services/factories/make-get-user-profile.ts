import { PrismaUserRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserProfileService } from '../get-user-profile'

export function makeGetUserProfile() {
  const usersRepository = new PrismaUserRepository()
  const useService = new GetUserProfileService(usersRepository)

  return useService
}
