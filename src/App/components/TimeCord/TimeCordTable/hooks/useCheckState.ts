import { minutesRound, numberRangeRegexp, sumTotalTime } from '../../util'
import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from '../../../../hooks'

export const useCheckState = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return () => {
    setTimeCardState((prev) => {
      const newData = prev.bodyData.map((object) => {
        try {
          const result = {
            ...object,
            customerWork: {
              ...object.customerWork,
              timeOfArrivalMinutesValue: minutesRound(object.customerWork.timeOfArrivalMinutesValue),
              leaveTimeMinutesValue: minutesRound(object.customerWork.leaveTimeMinutesValue),
              breakTimeMinutesValue: minutesRound(object.customerWork.breakTimeMinutesValue),
            },
            mainOfficeWork: {
              ...object.mainOfficeWork,
              timeOfArrivalMinutesValue: minutesRound(object.mainOfficeWork.timeOfArrivalMinutesValue),
              leaveTimeMinutesValue: minutesRound(object.mainOfficeWork.leaveTimeMinutesValue),
              breakTimeMinutesValue: minutesRound(object.mainOfficeWork.breakTimeMinutesValue),
            },
            hollow: {
              ...object.hollow,
              goingOutTimeMinutesValue: minutesRound(object.hollow.goingOutTimeMinutesValue),
              returnTimeMinutesValue: minutesRound(object.hollow.returnTimeMinutesValue),
            },
            breakdown: {
              ...object.breakdown,
              customerWorkTimeText: sumTotalTime(object.customerWork),
              mainOfficeWorkTimeText: sumTotalTime(object.mainOfficeWork),
            },
            error: false,
          }

          const c1 = Number(
            `${result.customerWork.timeOfArrivalHoursValue}${result.customerWork.timeOfArrivalMinutesValue}`
          )
          const c2 = Number(`${result.customerWork.leaveTimeHoursValue}${result.customerWork.leaveTimeMinutesValue}`)
          if (c1 && c2) {
            const res = numberRangeRegexp(String(c1), String(c2))
            console.log('res', res)
          }

          return result
        } catch (e) {
          return {
            ...object,
            error: true,
          }
        }
      })
      return {
        ...prev,
        bodyData: newData,
      }
    })
  }
}
