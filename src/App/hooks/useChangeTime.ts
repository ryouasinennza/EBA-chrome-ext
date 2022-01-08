import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'
import { timeCalc } from '../util'

interface UseChangeTimeHTMLInputElement extends HTMLInputElement {
  dataset: {
    inputType: string
    propName: 'customerWork'
    targetIndex: string
    timeType: 'breakTime' | 'leaveTime' | 'timeOfArrival'
  }
}

type UseChangeTime = (
  setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>
) => (e: BaseSyntheticEvent<object, HTMLInputElement, UseChangeTimeHTMLInputElement>) => void

export const useChangeTime: UseChangeTime = (setTimeCardState) => {
  return ({
    target: {
      dataset: { targetIndex, inputType, timeType, propName },
      value,
    },
  }) => {
    setTimeCardState((prev) => {
      const newData = prev.bodyData.map((object, index) => {
        if (Number(targetIndex) === index) {
          const hoursOrMinutes = inputType === 'hours'
          const hoursValueName:
            | 'breakTimeHoursValue'
            | 'leaveTimeHoursValue'
            | 'timeOfArrivalHoursValue' = `${timeType}HoursValue`
          const minutesValueName:
            | 'breakTimeMinutesValue'
            | 'leaveTimeMinutesValue'
            | 'timeOfArrivalMinutesValue' = `${timeType}MinutesValue`
          const calcValueName = `${timeType}CalcValue`
          const hoursValue = hoursOrMinutes ? value : object[propName][hoursValueName]
          const minutesValue = !hoursOrMinutes ? value : object[propName][minutesValueName]
          const calcValue = timeCalc(hoursValue, minutesValue)
          return {
            ...object,
            [propName]: {
              ...object[propName],
              [calcValueName]: calcValue,
              [hoursValueName]: hoursValue,
              [minutesValueName]: minutesValue,
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
