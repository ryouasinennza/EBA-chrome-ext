import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'
import { timeCalc } from '../util'

type UseSetBasicTime = (setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>) => (e: BaseSyntheticEvent) => void

export const useSetBasicTime: UseSetBasicTime = (setTimeCardState) => {
  return (e: BaseSyntheticEvent) => {
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
                breakTimeCalcValue: timeCalc(
                  prev.basicTime.basicTimeBreakHoursValue,
                  prev.basicTime.basicTimeBreakMinutesValue
                ),
                breakTimeHoursValue: prev.basicTime.basicTimeBreakHoursValue,
                breakTimeMinutesValue: prev.basicTime.basicTimeBreakMinutesValue,
                leaveTimeCalcValue: timeCalc(
                  prev.basicTime.basicTimeEndHoursValue,
                  prev.basicTime.basicTimeEndMinutesValue
                ),
                leaveTimeHoursValue: prev.basicTime.basicTimeEndHoursValue,
                leaveTimeMinutesValue: prev.basicTime.basicTimeEndMinutesValue,
                timeOfArrivalCalcValue: timeCalc(
                  prev.basicTime.basicTimeStartHoursValue,
                  prev.basicTime.basicTimeStartMinutesValue
                ),
                timeOfArrivalHoursValue: prev.basicTime.basicTimeStartHoursValue,
                timeOfArrivalMinutesValue: prev.basicTime.basicTimeStartMinutesValue,
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
