import { timeCalc } from '../util'
import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'

export const useSetBasicTime = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return (e) => {
    e.preventDefault()

    if (window.confirm('基本時刻をセットします')) {
      setTimeCardState((prev) => {
        if (prev.basicTime.error) {
          window.alert('エラーを修正してください')
          return prev
        }
        const newBodyData = prev.bodyData.map((object) => {
          if (object.days.dayType === 'weekday') {
            return {
              ...object,
              customerWork: {
                ...object.customerWork,
                timeOfArrivalHoursValue: prev.basicTime.basicTimeStartHoursValue,
                timeOfArrivalMinutesValue: prev.basicTime.basicTimeStartMinutesValue,
                timeOfArrivalCalcValue: timeCalc(
                  prev.basicTime.basicTimeStartHoursValue,
                  prev.basicTime.basicTimeStartMinutesValue
                ),
                leaveTimeHoursValue: prev.basicTime.basicTimeEndHoursValue,
                leaveTimeMinutesValue: prev.basicTime.basicTimeEndMinutesValue,
                leaveTimeCalcValue: timeCalc(
                  prev.basicTime.basicTimeEndHoursValue,
                  prev.basicTime.basicTimeEndMinutesValue
                ),
                breakTimeHoursValue: prev.basicTime.basicTimeBreakHoursValue,
                breakTimeMinutesValue: prev.basicTime.basicTimeBreakMinutesValue,
                breakTimeCalcValue: timeCalc(
                  prev.basicTime.basicTimeBreakHoursValue,
                  prev.basicTime.basicTimeBreakMinutesValue
                ),
              },
              workStyle: {
                ...object.workStyle,
                selectedValue: prev.basicTime.workType,
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
  }
}
