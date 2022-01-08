import { BaseSyntheticEvent, VFC } from 'react'
import styled from 'styled-components'
import { ActionBox, ActionBoxProps } from './ActionBox'
import { BasicTimeBox, BasicTimeBoxProps } from './BasicTimeBox'
import { ChangeDisplayMode, ChangeDisplayModeProps } from './ChangeDisplayMode'
import { TimeCordTable, TimeCordTableProps } from './TimeCordTable'
import { TotalDaysTable, TotalDaysTableProps } from './TotalDaysTable'
import { TotalTimesTable, TotalTimesTableProps } from './TotalTimesTable'

type TimeCordProps = {
  onSubmit: (e: BaseSyntheticEvent) => void
} & TimeCordTableProps &
  ActionBoxProps &
  BasicTimeBoxProps &
  TotalDaysTableProps &
  TotalTimesTableProps &
  ChangeDisplayModeProps

export const TimeCord: VFC<TimeCordProps> = ({
  basicTime,
  bodyData,
  changeBasicTime,
  changeDate,
  checkBasicTimeHours,
  checkBasicTimeMinutes,
  changeDisplayMode,
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
  displayMode,
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
      <ChangeDisplayMode displayMode={displayMode} changeDisplayMode={changeDisplayMode} />
      <TimeCordTable
        bodyData={bodyData}
        displayMode={displayMode}
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
  padding: 8px;
  margin: 8px;
  overflow-y: auto;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.primaryBGColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
`
