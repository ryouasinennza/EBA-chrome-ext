import styled from 'styled-components'

export const Td = styled('td')<{ isDisplayNone?: boolean }>`
  display: ${({ isDisplayNone }) => (isDisplayNone ? 'none' : 'table-cell')};
  padding: 4px 0;
  text-align: center;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.borderColor};
`
