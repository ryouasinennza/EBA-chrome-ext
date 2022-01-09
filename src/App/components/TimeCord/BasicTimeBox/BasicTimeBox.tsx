import { BaseSyntheticEvent, VFC } from 'react'
import styled from 'styled-components'
import { Coron, NonHoverTr, Td, Th, Thead, Tr, TwoDigitsInput } from '../../../common'

type BasicTime = {
  basicTimeBreakHoursValue: string
  basicTimeBreakMinutesValue: string
  basicTimeEndHoursValue: string
  basicTimeEndMinutesValue: string
  basicTimeStartHoursValue: string
  basicTimeStartMinutesValue: string
  error: boolean
  workType: string
}

export type BasicTimeBoxProps = {
  basicTime: BasicTime
  changeBasicTime: (e: BaseSyntheticEvent) => void
  checkBasicTimeHours: () => void
  checkBasicTimeMinutes: () => void
  setBasicTime: (e: BaseSyntheticEvent) => void
}

export const BasicTimeBox: VFC<BasicTimeBoxProps> = ({
  basicTime,
  changeBasicTime,
  checkBasicTimeHours,
  checkBasicTimeMinutes,
  setBasicTime,
}) => {
  return (
    <Box>
      <Table>
        <Thead>
          <NonHoverTr>
            <Th>就業開始時刻</Th>
            <Th>就業終了時刻</Th>
            <Th>基準休憩時間</Th>
            <Th>勤務形態</Th>
          </NonHoverTr>
        </Thead>
        <tbody>
          <Tr>
            <Td>
              <TwoDigitsInput
                name="time_card_work_start_0"
                data-input="basicTimeStartHoursValue"
                value={basicTime.basicTimeStartHoursValue}
                onChange={changeBasicTime}
                onBlur={checkBasicTimeHours}
                isError={basicTime.error}
              />
              <Coron />
              <TwoDigitsInput
                name="time_card_work_start_1"
                data-input="basicTimeStartMinutesValue"
                value={basicTime.basicTimeStartMinutesValue}
                onChange={changeBasicTime}
                onBlur={checkBasicTimeMinutes}
                isError={basicTime.error}
              />
            </Td>
            <Td>
              <TwoDigitsInput
                name="time_card_work_end_0"
                data-input="basicTimeEndHoursValue"
                value={basicTime.basicTimeEndHoursValue}
                onChange={changeBasicTime}
                onBlur={checkBasicTimeMinutes}
                isError={basicTime.error}
              />
              <Coron />
              <TwoDigitsInput
                name="time_card_work_end_1"
                data-input="basicTimeEndMinutesValue"
                value={basicTime.basicTimeEndMinutesValue}
                onChange={changeBasicTime}
                onBlur={checkBasicTimeMinutes}
                isError={basicTime.error}
              />
            </Td>
            <Td>
              <TwoDigitsInput
                name="time_card_rest_time_0"
                data-input="basicTimeBreakHoursValue"
                value={basicTime.basicTimeBreakHoursValue}
                onChange={changeBasicTime}
                onBlur={checkBasicTimeHours}
                isError={basicTime.error}
              />
              <Coron />
              <TwoDigitsInput
                name="time_card_rest_time_1"
                data-input="basicTimeBreakMinutesValue"
                value={basicTime.basicTimeBreakMinutesValue}
                onChange={changeBasicTime}
                onBlur={checkBasicTimeMinutes}
                isError={basicTime.error}
              />
            </Td>
            <Td>
              <Select
                name="time_card_work_type"
                data-input="workType"
                value={basicTime.workType}
                onChange={changeBasicTime}
              >
                <option value="1">出社</option>
                <option value="2">在宅</option>
              </Select>
            </Td>
          </Tr>
        </tbody>
      </Table>
      <SetBasicTimeButton onClick={setBasicTime}>基本時刻セット</SetBasicTimeButton>
    </Box>
  )
}
const Table = styled('table')`
  color: ${({ theme }) => theme.textColor};

  & * {
    border-color: ${({ theme }) => theme.borderColor};
  }
`

const Box = styled('div')`
  display: flex;
  margin: 8px 0;
`

const SetBasicTimeButton = styled('button')`
  margin: 0 8px;
  color: ${({ theme }) => theme.buttonTextColor};
  background-color: ${({ theme }) => theme.setBasicTimeButtonBGColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
`
const Select = styled('select')`
  border-radius: ${({ theme }) => theme.borderRadius};
`
