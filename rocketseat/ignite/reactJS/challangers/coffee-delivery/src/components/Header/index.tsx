import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, HeaderContent } from './style'

import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <HeaderContent>
        <span>
          <MapPin size={22} weight="fill" />
          Curitiba, PR
        </span>
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>99</span>
        </NavLink>
      </HeaderContent>
    </HeaderContainer>
  )
}
