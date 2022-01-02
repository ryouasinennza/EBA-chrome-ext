import styled from 'styled-components'
import { TableHeader } from './TableHeader'
import { TableBody, TableBodyProps } from './TableBody'
import { VFC } from 'react'

export type TimeCordTableProps = TableBodyProps
export const TimeCordTable: VFC<TimeCordTableProps> = ({
  bodyData,
  onChangeTime,
  onHollowChangeTime,
  onCheckState,
  onChangeSelector,
  onChangeText,
}) => {
  return (
    <Table>
      <TableHeader />
      <TableBody
        bodyData={bodyData}
        onChangeTime={onChangeTime}
        onHollowChangeTime={onHollowChangeTime}
        onCheckState={onCheckState}
        onChangeSelector={onChangeSelector}
        onChangeText={onChangeText}
      />
    </Table>
  )
}

const Table = styled('table')`
  min-width: 1340px;
`
