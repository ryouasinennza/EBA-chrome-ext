import { timeCalc } from '../util'
import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'

export const useHollowChangeTime = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return ({
    target: {
      value,
      dataset: { targetIndex, inputType, timeType },
    },
  }) => {
    setTimeCardState((prev) => {
      const newData = prev.bodyData.map((object, index) => {
        if (Number(targetIndex) === index) {
          const hoursOrMinutes = inputType === 'hours'
          const hoursValueName = `${timeType}HoursValue`
          const minutesValueName = `${timeType}MinutesValue`
          const calcValueName = `${timeType}CalcValue`
          const hoursValue = hoursOrMinutes ? value : object.hollow[hoursValueName]
          const minutesValue = !hoursOrMinutes ? value : object.hollow[minutesValueName]
          const calcValue = timeCalc(hoursValue, minutesValue)
          return {
            ...object,
            hollow: {
              ...object.hollow,
              [hoursValueName]: hoursValue,
              [minutesValueName]: minutesValue,
              [calcValueName]: calcValue,
            },
          }
        }
        return object
      })

      return {
        ...prev,
        bodyData: newData,
      }
    })
  }
}
