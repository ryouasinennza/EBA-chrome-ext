import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'
import { timeCalc } from '../util'
interface UseHollowChangeTimeHTMLInputElement extends HTMLInputElement {
  dataset: {
    inputType: string
    targetIndex: string
    timeType: 'goingOutTime' | 'returnTime'
  }
}

type UseHollowChangeTime = (
  setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>
) => (e: BaseSyntheticEvent<object, HTMLInputElement, UseHollowChangeTimeHTMLInputElement>) => void

export const useHollowChangeTime: UseHollowChangeTime = (setTimeCardState) => {
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
          const hoursValueName: 'goingOutTimeHoursValue' | 'returnTimeHoursValue' = `${timeType}HoursValue`
          const minutesValueName: 'goingOutTimeMinutesValue' | 'returnTimeMinutesValue' = `${timeType}MinutesValue`
          const calcValueName = `${timeType}CalcValue`
          const hoursValue = hoursOrMinutes ? value : object.hollow[hoursValueName]
          const minutesValue = !hoursOrMinutes ? value : object.hollow[minutesValueName]
          const calcValue = timeCalc(hoursValue, minutesValue)
          return {
            ...object,
            hollow: {
              ...object.hollow,
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
