import { Th, NonHoverTr, Thead } from '../../../common'
export const TableHeader = () => {
  return (
    <Thead>
      <NonHoverTr>
        <Th rowSpan={2}>日付</Th>
        <Th colSpan={3}>客先勤務</Th>
        <Th colSpan={3}>本社勤務</Th>
        <Th colSpan={2}>中抜け</Th>
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
        <Th>出社時刻</Th>
        <Th>退社時刻</Th>
        <Th>休憩時刻</Th>
        <Th>出社時刻</Th>
        <Th>退社時刻</Th>
        <Th>休憩時刻</Th>
        <Th>外出時刻</Th>
        <Th>戻り時刻</Th>
        <Th>客先</Th>
        <Th>本社</Th>
      </NonHoverTr>
    </Thead>
  )
}
