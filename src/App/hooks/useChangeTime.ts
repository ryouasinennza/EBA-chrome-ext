import { timeCalc } from '../util'
import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'

export const useChangeTime = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return ({
    target: {
      value,
      dataset: { targetIndex, inputType, timeType, propName },
    },
  }) => {
    setTimeCardState((prev) => {
      const newData = prev.bodyData.map((object, index) => {
        if (Number(targetIndex) === index) {
          const hoursOrMinutes = inputType === 'hours'
          const hoursValueName = `${timeType}HoursValue`
          const minutesValueName = `${timeType}MinutesValue`
          const calcValueName = `${timeType}CalcValue`
          const hoursValue = hoursOrMinutes ? value : object[propName][hoursValueName]
          const minutesValue = !hoursOrMinutes ? value : object[propName][minutesValueName]
          const calcValue = timeCalc(hoursValue, minutesValue)
          return {
            ...object,
            [propName]: {
              ...object[propName],
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
