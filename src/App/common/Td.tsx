import styled from 'styled-components'

export const Td = styled('td')`
  white-space: nowrap;
  padding: 4px 0;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderColor};
`
