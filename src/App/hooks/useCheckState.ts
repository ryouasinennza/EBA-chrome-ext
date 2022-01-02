import { calcOverTime, checkHollow, minutesRound, sumBreakdownTotal, sumTime, sumTotalTime } from '../util'
import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'

export const useCheckState = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return () => {
    setTimeCardState((prev) => {
      const newData = prev.bodyData.map((object) => {
        try {
          checkHollow(object.hollow.goingOutTimeCalcValue, object.hollow.returnTimeCalcValue)
          const totalTime = sumTotalTime(object.customerWork, object.mainOfficeWork, object.hollow)
          return {
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
              customerWorkTimeText: sumTime(object.customerWork),
              mainOfficeWorkTimeText: sumTime(object.mainOfficeWork),
            },
            total: {
              ...object.total,
              text: totalTime,
            },
            error: false,
            overTime: {
              ...object.overTime,
              text: calcOverTime(totalTime),
            },
          }
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
        customData: {
          customerTotal: sumBreakdownTotal(newData, 'customerWorkTimeText'),
          headquartersTotal: sumBreakdownTotal(newData, 'mainOfficeWorkTimeText'),
        },
      }
    })
  }
}
