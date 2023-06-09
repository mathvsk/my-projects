import { verifyJwt } from '@/http/middlewares/verify-jwt'

import { FastifyInstance } from 'fastify'

import { register } from './register-controller'
import { authenticate } from './authenticate-controller'
import { profile } from './profile.controller'
import { refresh } from './refresh'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile)
}
