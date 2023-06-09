import { makeValidateCheckIn } from '@/services/factories/make-validate-check-in'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const validateCheckInParamsSchema = z.object({
    checkInID: z.string().uuid(),
  })

  const { checkInID } = validateCheckInParamsSchema.parse(request.params)

  const validateCheckInService = makeValidateCheckIn()

  await validateCheckInService.execute({
    checkInID,
  })

  return reply.status(204).send()
}
