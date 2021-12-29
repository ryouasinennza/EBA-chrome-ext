import styled from 'styled-components'

export const Tr = styled('tr')<{ BGColor?: string }>`
  padding: 4px;
  text-align: center;
  background-color: ${({ BGColor }) => BGColor};
`
