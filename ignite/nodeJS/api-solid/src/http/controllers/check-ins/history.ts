import { makeFetchUserCheckIns } from '@/services/factories/make-fetch-user-check-ins-history'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function history(request: FastifyRequest, reply: FastifyReply) {
  const checkInHistoryQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1),
  })

  const { page } = checkInHistoryQuerySchema.parse(request.query)

  const fetchUserCheckInsHistoryService = makeFetchUserCheckIns()

  const { checkIns } = await fetchUserCheckInsHistoryService.execute({
    page,
    userID: request.user.sub,
  })

  return reply.status(200).send({
    checkIns,
  })
}
