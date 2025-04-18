import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { knex } from '../database'
import { checkSessionIdExists } from '../middlewares/check-session-id-exist'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', { preHandler: [checkSessionIdExists] }, async (request) => {
    const { sessionID } = request.cookies

    const transactions = await knex('transactions')
      .where('session_id', sessionID)
      .select()

    return { transactions }
  })

  app.get('/:id', { preHandler: [checkSessionIdExists] }, async (request) => {
    const getTransactionsParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionsParamsSchema.parse(request.params)

    const { sessionID } = request.cookies

    const transaction = await knex('transactions')
      .where({
        session_id: sessionID,
        id,
      })
      .first()

    return { transaction }
  })

  app.get(
    '/summary',
    { preHandler: [checkSessionIdExists] },
    async (request) => {
      const { sessionID } = request.cookies

      const summary = await knex('transactions')
        .where('session_id', sessionID)
        .sum('amount', { as: 'amount' })
        .first()

      return { summary }
    },
  )

  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    let sessionID = request.cookies.sessionID

    if (!sessionID) {
      sessionID = randomUUID()

      reply.setCookie('sessionID', sessionID, {
        path: '/',
        // milisegundos * minutos * horas * dia * dias (Total de dias)
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days (clean code)
      })
    }

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionID,
    })

    return reply.status(201).send()
  })
}
