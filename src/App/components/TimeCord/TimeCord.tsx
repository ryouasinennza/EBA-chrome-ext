import styled from 'styled-components'
import { VFC } from 'react'
import { TimeCordTable, TimeCordTableProps } from './TimeCordTable'
import { ActionBox, ActionBoxProps } from './ActionBox'
import { BasicTimeBox, BasicTimeBoxProps } from './BasicTimeBox'
import { TotalDaysTable, TotalDaysTableProps } from './TotalDaysTable'
import { TotalTimesTable, TotalTimesTableProps } from './TotalTimesTable'

type TimeCordProps = {
  onSubmit: (e) => void
} & TimeCordTableProps &
  ActionBoxProps &
  BasicTimeBoxProps &
  TotalDaysTableProps &
  TotalTimesTableProps

export const TimeCord: VFC<TimeCordProps> = ({
  basicTime,
  bodyData,
  changeBasicTime,
  changeDate,
  checkBasicTimeHours,
  checkBasicTimeMinutes,
  clickCustomerMode,
  customData,
  date,
  memberNo,
  onChangeSelector,
  onChangeText,
  onChangeTime,
  onCheckState,
  onHollowChangeTime,
  onSubmit,
  setBasicTime,
  totalDaysData,
  totalTimesData,
  uniqueId,
}) => {
  return (
    <TimeCordBox method="post" action="/time_card" onSubmit={onSubmit}>
      <ActionBox
        changeDate={changeDate}
        clickCustomerMode={clickCustomerMode}
        date={date}
        memberNo={memberNo}
        uniqueId={uniqueId}
      />
      <BasicTimeBox
        basicTime={basicTime}
        changeBasicTime={changeBasicTime}
        checkBasicTimeHours={checkBasicTimeHours}
        checkBasicTimeMinutes={checkBasicTimeMinutes}
        setBasicTime={setBasicTime}
      />
      <TimeCordTable
        bodyData={bodyData}
        onChangeTime={onChangeTime}
        onHollowChangeTime={onHollowChangeTime}
        onCheckState={onCheckState}
        onChangeSelector={onChangeSelector}
        onChangeText={onChangeText}
      />
      <TotalDaysTable totalDaysData={totalDaysData} />
      <TotalTimesTable totalTimesData={totalTimesData} customData={customData} />
    </TimeCordBox>
  )
}

const TimeCordBox = styled('form')`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 8px;
  margin: 8px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.primaryBGColor};
  color: ${({ theme }) => theme.textColor};
`
