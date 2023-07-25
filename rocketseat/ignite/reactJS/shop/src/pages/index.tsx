import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import camisa1 from '@/assets/Type6.png'
import camisa2 from '@/assets/2_explorer-t-shirt 1.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camisa2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Beyond the Limits</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
