import Stripe from 'stripe'

// Criei essa variavel para remover o da variavel "que pode ser nulavel"
const stripeKey = process.env.STRIPE_SECRET_KEY as string

export const stripe = new Stripe(stripeKey, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shop',
  },
})
