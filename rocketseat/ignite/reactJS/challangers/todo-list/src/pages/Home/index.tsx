import { HeaderContainer, InputContainer } from './style'

import Logo from '../../assets/logo.svg'

export function Home() {
  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="" />
      </HeaderContainer>

      <InputContainer>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>Criar</button>
      </InputContainer>
    </>
  )
}
