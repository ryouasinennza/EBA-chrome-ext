import styled from 'styled-components'

export const TwoDigitsInput = (props) => {
  return <Input maxLength={2} {...props} />
}

type InputProps = {
  isError?: boolean
}

const Input = styled('input')<InputProps>`
  width: 24px;
  color: ${({ isError }) => (isError ? '#fff' : '#000')};
  background-color: ${({ isError }) => (isError ? 'red' : 'transparent')};
`
