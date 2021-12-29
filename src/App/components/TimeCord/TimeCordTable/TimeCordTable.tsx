import styled from 'styled-components'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'
import { Dispatch, SetStateAction, VFC } from 'react'
import { BodyData, TimeCardState } from '../../../hooks'

export type TimeCordTableProps = {
  bodyData: BodyData
  setTimeCardState: Dispatch<SetStateAction<TimeCardState>>
}

export const TimeCordTable: VFC<TimeCordTableProps> = ({ bodyData, setTimeCardState }) => {
  return (
    <Table>
      <TableHeader />
      <TableBody setTimeCardState={setTimeCardState} bodyData={bodyData} />
    </Table>
  )
}

const Table = styled('table')`
  min-width: 1340px;
`
