import styled from 'styled-components'
import { TrColorProperty } from '../styles/theme'

export const Tr = styled('tr')<{ BGColor?: TrColorProperty }>`
  padding: 4px;
  text-align: center;
  background-color: ${({ theme, BGColor }) => (BGColor ? theme.trColor[BGColor] : theme.primaryBGColor)};
  &:hover {
    background-color: ${({ theme, BGColor }) => (BGColor === 'error' ? theme.trColor.error : theme.hoverBGColor)};
  }
`
