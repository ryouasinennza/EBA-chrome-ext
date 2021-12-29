import { Dispatch, SetStateAction, VFC } from 'react'
import styled from 'styled-components'
import { Tr, Th, Td, TwoDigitsInput } from '../../../common'
import { BasicTime } from '../../../hooks/util'
import { TimeCardState } from '../../../hooks'
import { timeCalc, checkHours, minutesRound } from '../util'

export type BasicTimeBoxProps = {
  basicTime: BasicTime
  setTimeCardState: Dispatch<SetStateAction<TimeCardState>>
}

export const BasicTimeBox: VFC<BasicTimeBoxProps> = ({ basicTime, setTimeCardState }) => {
  const changeBasicTime = (e) => {
    setTimeCardState((prev) => {
      return {
        ...prev,
        basicTime: {
          ...prev.basicTime,
          [e.target.dataset.input]: e.target.value,
        },
      }
    })
  }

  const onBlurHours = (e) => {
    setTimeCardState((prev) => {
      if (
        checkHours(prev.basicTime.basicTimeStartHoursValue) &&
        checkHours(prev.basicTime.basicTimeEndHoursValue) &&
        checkHours(prev.basicTime.basicTimeBreakHoursValue)
      ) {
        return {
          ...prev,
          basicTime: {
            ...prev.basicTime,
            error: false,
          },
        }
      } else {
        return {
          ...prev,
          basicTime: {
            ...prev.basicTime,
            error: true,
          },
        }
      }
    })
  }

  const onBlurMinutes = (e) => {
    setTimeCardState((prev) => {
      try {
        return {
          ...prev,
          basicTime: {
            ...prev.basicTime,
            basicTimeStartMinutesValue: minutesRound(prev.basicTime.basicTimeStartMinutesValue),
            basicTimeEndMinutesValue: minutesRound(prev.basicTime.basicTimeEndMinutesValue),
            basicTimeBreakMinutesValue: minutesRound(prev.basicTime.basicTimeBreakMinutesValue),
            error: false,
          },
        }
      } catch (e) {
        return {
          ...prev,
          basicTime: {
            ...prev.basicTime,
            error: true,
          },
        }
      }
    })
  }

  const setBasicTime = (e) => {
    e.preventDefault()
    if (!basicTime.error) {
      if (window.confirm('基本時刻をセットします')) {
        setTimeCardState((prev) => {
          const newBodyData = prev.bodyData.map((object) => {
            if (object.days.dayType === 'weekday') {
              return {
                ...object,
                customerWork: {
                  ...object.customerWork,
                  timeOfArrivalHoursValue: basicTime.basicTimeStartHoursValue,
                  timeOfArrivalMinutesValue: basicTime.basicTimeStartMinutesValue,
                  timeOfArrivalCalcValue: timeCalc(
                    basicTime.basicTimeStartHoursValue,
                    basicTime.basicTimeStartMinutesValue
                  ),
                  leaveTimeHoursValue: basicTime.basicTimeEndHoursValue,
                  leaveTimeMinutesValue: basicTime.basicTimeEndMinutesValue,
                  leaveTimeCalcValue: timeCalc(basicTime.basicTimeEndHoursValue, basicTime.basicTimeEndMinutesValue),
                  breakTimeHoursValue: basicTime.basicTimeBreakHoursValue,
                  breakTimeMinutesValue: basicTime.basicTimeBreakMinutesValue,
                  breakTimeCalcValue: timeCalc(
                    basicTime.basicTimeBreakHoursValue,
                    basicTime.basicTimeBreakMinutesValue
                  ),
                },
                workStyle: {
                  ...object.workStyle,
                  selectedValue: basicTime.workType,
                },
              }
            } else {
              return object
            }
          })

          return {
            ...prev,
            bodyData: newBodyData,
          }
        })
      }
    } else {
      window.alert('エラーを修正してください')
    }
  }
  return (
    <Box>
      <table>
        <thead>
          <Tr>
            <Th>就業開始時刻</Th>
            <Th>就業終了時刻</Th>
            <Th>基準休憩時間</Th>
            <Th>勤務形態</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>
              <TwoDigitsInput
                name="time_card_work_start_0"
                data-input="basicTimeStartHoursValue"
                value={basicTime.basicTimeStartHoursValue}
                onChange={changeBasicTime}
                onBlur={onBlurHours}
                isError={basicTime.error}
              />
              ：
              <TwoDigitsInput
                name="time_card_work_start_1"
                data-input="basicTimeStartMinutesValue"
                value={basicTime.basicTimeStartMinutesValue}
                onChange={changeBasicTime}
                onBlur={onBlurMinutes}
                isError={basicTime.error}
              />
            </Td>
            <Td>
              <TwoDigitsInput
                name="time_card_work_end_0"
                data-input="basicTimeEndHoursValue"
                value={basicTime.basicTimeEndHoursValue}
                onChange={changeBasicTime}
                onBlur={onBlurHours}
                isError={basicTime.error}
              />
              ：
              <TwoDigitsInput
                name="time_card_work_end_1"
                data-input="basicTimeEndMinutesValue"
                value={basicTime.basicTimeEndMinutesValue}
                onChange={changeBasicTime}
                onBlur={onBlurMinutes}
                isError={basicTime.error}
              />
            </Td>
            <Td>
              <TwoDigitsInput
                name="time_card_rest_time_0"
                data-input="basicTimeBreakHoursValue"
                value={basicTime.basicTimeBreakHoursValue}
                onChange={changeBasicTime}
                onBlur={onBlurHours}
                isError={basicTime.error}
              />
              ：
              <TwoDigitsInput
                name="time_card_rest_time_1"
                data-input="basicTimeBreakMinutesValue"
                value={basicTime.basicTimeBreakMinutesValue}
                onChange={changeBasicTime}
                onBlur={onBlurMinutes}
                isError={basicTime.error}
              />
            </Td>
            <Td>
              <select
                name="time_card_work_type"
                data-input="workType"
                value={basicTime.workType}
                onChange={changeBasicTime}
              >
                <option value="1">出社</option>
                <option value="2">在宅</option>
              </select>
            </Td>
          </Tr>
        </tbody>
      </table>
      <SetBasicTimeButton onClick={setBasicTime}>基本時刻セット</SetBasicTimeButton>
    </Box>
  )
}

const Box = styled('div')`
  margin: 8px 0;
  display: flex;
`

const SetBasicTimeButton = styled('button')`
  margin: 0 8px;
  background-color: red;
  color: #fff;
  outline: none;
  border: 1px solid #000;
  border-radius: 4px;
`
