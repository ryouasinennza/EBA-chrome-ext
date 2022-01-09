import { InputHTMLAttributes, VFC } from 'react'
import styled from 'styled-components'

type InputProps = {
  isError?: boolean
}

export const TwoDigitsInput: VFC<InputHTMLAttributes<HTMLInputElement> & InputProps> = (props) => {
  return <Input maxLength={2} {...props} />
}

const Input = styled('input')<InputProps>`
  width: 28px;
  height: 27px;
  padding: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  background-color: ${({ theme, isError }) => (isError ? 'red' : theme.primaryBGColor)};
  border: none;
  outline: none;
`
