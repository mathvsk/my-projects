import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from '@phosphor-icons/react'
import { CheckBoxRoot } from './style'

export interface CheckBoxProps extends Checkbox.CheckboxIndicatorProps {}

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxRoot {...props}>
      <Checkbox.Indicator asChild>
        <Check size={8} weight="bold" />
      </Checkbox.Indicator>
    </CheckBoxRoot>
  )
}
