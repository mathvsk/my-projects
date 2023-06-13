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
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  max-width: 46rem;
  margin: 0 auto;
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

    &:focus {
      outline: transparent;
      box-shadow: 0px 0px 0px 1px ${({ theme }) => theme['purple-dark']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;

    border: none;
    border-radius: 8px;

    background: ${({ theme }) => theme['blue-dark']};

    font-weight: 700;
    font-size: 0.875rem;

    cursor: pointer;

    transition: background 0.2s;

    &:hover {
      background: ${({ theme }) => theme.blue};
    }
  }
`
export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  & > :first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 0.875rem;

    padding-bottom: 0.75rem;

    & > p {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-weight: 700;
    }

    & > :nth-child(1) {
      color: ${({ theme }) => theme.blue};
    }

    & > :nth-child(2) {
      color: ${({ theme }) => theme.purple};
    }

    & span {
      color: ${({ theme }) => theme['gray-200']};
      background: ${({ theme }) => theme['gray-400']};
      border-radius: 999px;

      font-size: 0.75rem;

      padding: 0.125rem 0.5rem;
    }
  }
`
export const TasksContent = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 0.75rem;

  padding: 1rem;

  background: ${({ theme }) => theme['gray-500']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  line-height: 140%;

  button {
    padding: 0.3125rem;

    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.danger};
      background: ${({ theme }) => theme['gray-400']};
      border-radius: 4px;
    }
  }
`
