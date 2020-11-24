import { forwardRef, InputHTMLAttributes } from 'react'
import { InputField } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  message?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <InputField>
      <input id={name} {...rest} ref={ref} />
      <label htmlFor={name}>{label}</label>
    </InputField>
  )
}

export default forwardRef(Input)
