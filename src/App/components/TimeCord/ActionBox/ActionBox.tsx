import { BaseSyntheticEvent, VFC } from 'react'
import styled from 'styled-components'

export type ActionBoxProps = {
  changeDate: (e: BaseSyntheticEvent) => void
  clickCustomerMode: () => void
  date: string
  memberNo: string
  uniqueId: string
}

export const ActionBox: VFC<ActionBoxProps> = ({ changeDate, clickCustomerMode, date, memberNo, uniqueId }) => {
  return (
    <Box>
      <input type="hidden" value={memberNo} name="member_no" />
      <input type="hidden" value={uniqueId} name="unique_id" />
      <input type="hidden" value={date} name="push_date" />
      <DatePicker type="month" name="time_card_year_month" value={date} onChange={changeDate} />
      <DisplayButton name="display" value="1" children="表示" />
      <SaveButton type="submit" name="save" value="1" children="保存" />
      <CustomerButton as="div" onClick={clickCustomerMode} children="客先提出用" />
    </Box>
  )
}

const Box = styled('div')`
  display: flex;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`

const ButtonBase = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 4px;
  color: ${({ theme }) => theme.buttonTextColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;

  &:hover {
    position: relative;
    top: 1px;
    left: 1px;
  }
`

const DatePicker = styled('input')`
  padding: 4px;
  margin: 4px;
`

const DisplayButton = styled(ButtonBase)`
  background-color: orange;
`

const SaveButton = styled(ButtonBase)`
  background-color: green;
`

const CustomerButton = styled(ButtonBase)`
  background-color: blue;
`
