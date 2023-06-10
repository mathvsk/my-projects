import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding-top: 4.5rem;
    padding-bottom: calc(5rem - 27px);
  }
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  input {
    width: 39.9375rem;
    height: 3.375rem;

    padding: 1rem 0 1rem 1rem;

    background: ${({ theme }) => theme['gray-500']};

    border-radius: 8px;
  }
`
