import styled from 'styled-components'
import { VFC } from 'react'
import { TimeCordTable, TimeCordTableProps } from './TimeCordTable'
import { ActionBox, ActionBoxProps } from './ActionBox'
import { BasicTimeBox, BasicTimeBoxProps } from './BasicTimeBox'

type TimeCordProps = {
  onSubmit: (e) => void
} & TimeCordTableProps &
  ActionBoxProps &
  BasicTimeBoxProps

export const TimeCord: VFC<TimeCordProps> = ({
  basicTime,
  bodyData,
  changeDate,
  clickCustomerMode,
  date,
  memberNo,
  onSubmit,
  uniqueId,
  setTimeCardState,
}) => {
  return (
    <TimeCordBox method="post" onSubmit={onSubmit}>
      <ActionBox
        changeDate={changeDate}
        clickCustomerMode={clickCustomerMode}
        date={date}
        memberNo={memberNo}
        uniqueId={uniqueId}
      />
      <BasicTimeBox basicTime={basicTime} setTimeCardState={setTimeCardState} />
      <TimeCordTable bodyData={bodyData} setTimeCardState={setTimeCardState} />
    </TimeCordBox>
  )
}

const TimeCordBox = styled('form')`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
  overflow-y: auto;
`
