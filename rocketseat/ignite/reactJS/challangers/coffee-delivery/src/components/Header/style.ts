import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > span {
    display: flex;
    padding: 0.5rem;
    align-items: center;
    gap: 0.25rem;

    border-radius: 6px;

    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme['purple-light']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  a {
    position: relative;

    display: inline-flex; // usado inline-flex para a tag <a> "respeitar" meu padding, margin, etc... Se não tive isso aqui, o calculo não vai bater no alinhamento.
    padding: 0.5rem;

    color: ${(props) => props.theme['yellow-dark']};

    background: ${(props) => props.theme['yellow-light']};

    border-radius: 6px;

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;

      position: absolute;
      top: -0.5rem;
      right: -0.5rem;

      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};

      border-radius: 100%;

      font-size: 0.75rem;
      font-weight: 700;
    }
  }
`
