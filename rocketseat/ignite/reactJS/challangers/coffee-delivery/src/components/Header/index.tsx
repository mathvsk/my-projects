import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, HeaderContent } from './style'

import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <a href="">
        <img src={Logo} alt="" />
      </a>
      <HeaderContent>
        <span>
          <MapPin size={22} weight="fill" />
          Curitiba, PR
        </span>
        <a href="">
          <ShoppingCart size={22} weight="fill" />
          <span>99</span>
        </a>
      </HeaderContent>
    </HeaderContainer>
  )
}
