import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const CheckBoxRoot = styled(Checkbox.Root)`
  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: 2px solid ${({ theme }) => theme.blue};

  transition: background 0.2s;

  &[data-state='checked'] {
    border-color: ${({ theme }) => theme['purple-dark']};
    background: ${({ theme }) => theme['purple-dark']};

    transition: all 0.2s;

    &:hover {
      border-color: ${({ theme }) => theme.purple};
      background: ${({ theme }) => theme.purple};
      opacity: 0.9;
    }
  }

  &[data-state='unchecked']:hover {
    background: rgba(0, 119, 190, 0.2);
  }
`
