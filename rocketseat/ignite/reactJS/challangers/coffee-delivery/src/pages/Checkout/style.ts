import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin-top: 2.5rem;
`
export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h2 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  width: 35rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  div {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    & > p {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 1rem;
        font-weight: 500;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
      }

      span {
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
      }
    }

    & > svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
  }
`
