import { VFC } from 'react'
import { NonHoverTr, Th, Thead } from '../../../common'

type TableHeaderProps = {
  displayMode: {
    customerWork: boolean
    hollow: boolean
    mainOfficeWork: boolean
  }
}

export const TableHeader: VFC<TableHeaderProps> = ({ displayMode }) => {
  return (
    <Thead>
      <NonHoverTr>
        <Th rowSpan={2}>日付</Th>
        <Th colSpan={3} isDisplayNone={!displayMode.customerWork}>
          客先勤務
        </Th>
        <Th colSpan={3} isDisplayNone={!displayMode.mainOfficeWork}>
          本社勤務
        </Th>
        <Th colSpan={2} isDisplayNone={!displayMode.hollow}>
          中抜け
        </Th>
        <Th colSpan={2}>内訳</Th>
        <Th rowSpan={2}>合計</Th>
        <Th rowSpan={2}>残業/ 休出</Th>
        <Th rowSpan={2}>種別</Th>
        <Th rowSpan={2}>事由</Th>
        <Th rowSpan={2} style={{ display: 'none' }}>
          欠勤連絡
        </Th>
        <Th rowSpan={2}>勤務形態</Th>
        <Th rowSpan={2}>備考</Th>
      </NonHoverTr>
      <NonHoverTr>
        <Th isDisplayNone={!displayMode.customerWork}>出社時刻</Th>
        <Th isDisplayNone={!displayMode.customerWork}>退社時刻</Th>
        <Th isDisplayNone={!displayMode.customerWork}>休憩時刻</Th>
        <Th isDisplayNone={!displayMode.mainOfficeWork}>出社時刻</Th>
        <Th isDisplayNone={!displayMode.mainOfficeWork}>退社時刻</Th>
        <Th isDisplayNone={!displayMode.mainOfficeWork}>休憩時刻</Th>
        <Th isDisplayNone={!displayMode.hollow}>外出時刻</Th>
        <Th isDisplayNone={!displayMode.hollow}>戻り時刻</Th>
        <Th>客先</Th>
        <Th>本社</Th>
      </NonHoverTr>
    </Thead>
  )
}
