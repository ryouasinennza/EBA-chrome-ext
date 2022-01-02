import styled from 'styled-components'

export const Th = styled('th')<{ isDisplayNone?: boolean }>`
  display: ${({ isDisplayNone }) => (isDisplayNone ? 'none' : 'table-cell')};
  padding: 4px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderColor};
`
