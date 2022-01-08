import { InputHTMLAttributes, VFC } from 'react'

export const InputTypeHidden: VFC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input type="hidden" {...props} />
}
