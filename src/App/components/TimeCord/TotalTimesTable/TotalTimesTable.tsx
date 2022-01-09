import { VFC } from 'react'
import styled from 'styled-components'
import { NonHoverTr, Td, Th, Thead } from '../../../common'

export type TotalTimesTableProps = {
  customData: {
    customerTotal: string
    headquartersTotal: string
  }
  totalTimesData: {
    actualWorkLegalHoliday: string
    actualWorkScheduledHoliday: string
    actualWorkTotal: string
    actualWorkWeekdayTotal: string
    overTimeLegalHoliday: string
    overTimeLegalHolidayMidnight: string
    overTimeMidnightOvertime: string
    overTimeNormalOvertime: string
    overTimeScheduledHoliday: string
    overTimeScheduledHolidayMidnight: string
    overTimeTotal: string
  }
}

export const TotalTimesTable: VFC<TotalTimesTableProps> = ({ customData, totalTimesData }) => {
  return (
    <Table>
      <Thead>
        <NonHoverTr>
          <Th colSpan={7}>残業・休出（時間）</Th>
          <Th colSpan={6}>実働時間（時間）</Th>
        </NonHoverTr>
        <NonHoverTr>
          <Th>普通残業</Th>
          <Th>深夜残業</Th>
          <Th>所定休日</Th>
          <Th>所定休日深夜</Th>
          <Th>法定休日</Th>
          <Th>法定休日深夜</Th>
          <Th>合計</Th>
          <Th>平日</Th>
          <Th>所定休日</Th>
          <Th>法定休日</Th>
          <Th>客先合計</Th>
          <Th>本社合計</Th>
          <Th>総合計</Th>
        </NonHoverTr>
      </Thead>
      <tbody>
        <NonHoverTr>
          <Td>{totalTimesData.overTimeNormalOvertime}</Td>
          <Td>{totalTimesData.overTimeMidnightOvertime}</Td>
          <Td>{totalTimesData.overTimeScheduledHoliday}</Td>
          <Td>{totalTimesData.overTimeScheduledHolidayMidnight}</Td>
          <Td>{totalTimesData.overTimeLegalHoliday}</Td>
          <Td>{totalTimesData.overTimeLegalHolidayMidnight}</Td>
          <Td>{totalTimesData.overTimeTotal}</Td>
          <Td>{totalTimesData.actualWorkWeekdayTotal}</Td>
          <Td>{totalTimesData.actualWorkScheduledHoliday}</Td>
          <Td>{totalTimesData.actualWorkLegalHoliday}</Td>
          <Td>{customData.customerTotal}</Td>
          <Td>{customData.headquartersTotal}</Td>
          <Td>{totalTimesData.actualWorkTotal}</Td>
        </NonHoverTr>
      </tbody>
    </Table>
  )
}

const Table = styled('table')`
  min-width: 1340px;
  margin: 8px 0;
`
