import { makeGetUserProfile } from '@/services/factories/make-get-user-profile'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfileService = makeGetUserProfile()

  const { user } = await getUserProfileService.execute({
    userID: request.user.sub,
  })

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined, // boa pratica não retornar o hash da senha
    },
  })
}
