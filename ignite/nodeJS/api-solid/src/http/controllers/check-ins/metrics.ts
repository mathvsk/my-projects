import { makeGetUserMetrics } from '@/services/factories/make-get-user-metrics'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function metrics(request: FastifyRequest, reply: FastifyReply) {
  const getUserMetricsService = makeGetUserMetrics()

  const { checkInsCount } = await getUserMetricsService.execute({
    userID: request.user.sub,
  })

  return reply.status(200).send({
    checkInsCount,
  })
}
