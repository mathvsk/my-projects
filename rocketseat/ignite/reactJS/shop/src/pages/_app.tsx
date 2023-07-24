import { Roboto } from 'next/font/google'
import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'

import logo from '@/assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logo.src} />
      </Header>

      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Container>
  )
}
