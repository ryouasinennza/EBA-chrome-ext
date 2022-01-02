import styled from 'styled-components'

export const TwoDigitsInput = (props) => {
  return <Input maxLength={2} {...props} />
}

type InputProps = {
  isError?: boolean
}

const Input = styled('input')<InputProps>`
  width: 28px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme, isError }) => (isError ? 'red' : theme.primaryBGColor)};
  outline: none;
  border: none;
  font-size: 20px;
  height: 27px;
  padding: 0;
  text-align: center;
`
