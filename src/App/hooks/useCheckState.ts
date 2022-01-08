import { Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'
import { calcOverTime, checkHollow, minutesRound, sumBreakdownTotal, sumTime, sumTotalTime } from '../util'

type UseCheckState = (setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>) => () => void

export const useCheckState: UseCheckState = (setTimeCardState) => {
  return () => {
    setTimeCardState((prev) => {
      const newData = prev.bodyData.map((object) => {
        try {
          checkHollow(object.hollow.goingOutTimeCalcValue, object.hollow.returnTimeCalcValue)
          const totalTime = sumTotalTime(object.customerWork, object.mainOfficeWork, object.hollow)
          return {
            ...object,
            breakdown: {
              ...object.breakdown,
              customerWorkTimeText: sumTime(object.customerWork),
              mainOfficeWorkTimeText: sumTime(object.mainOfficeWork),
            },
            customerWork: {
              ...object.customerWork,
              breakTimeMinutesValue: minutesRound(object.customerWork.breakTimeMinutesValue),
              leaveTimeMinutesValue: minutesRound(object.customerWork.leaveTimeMinutesValue),
              timeOfArrivalMinutesValue: minutesRound(object.customerWork.timeOfArrivalMinutesValue),
            },
            error: false,
            hollow: {
              ...object.hollow,
              goingOutTimeMinutesValue: minutesRound(object.hollow.goingOutTimeMinutesValue),
              returnTimeMinutesValue: minutesRound(object.hollow.returnTimeMinutesValue),
            },
            mainOfficeWork: {
              ...object.mainOfficeWork,
              breakTimeMinutesValue: minutesRound(object.mainOfficeWork.breakTimeMinutesValue),
              leaveTimeMinutesValue: minutesRound(object.mainOfficeWork.leaveTimeMinutesValue),
              timeOfArrivalMinutesValue: minutesRound(object.mainOfficeWork.timeOfArrivalMinutesValue),
            },
            overTime: {
              ...object.overTime,
              text: calcOverTime(totalTime),
            },
            total: {
              ...object.total,
              text: totalTime,
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
