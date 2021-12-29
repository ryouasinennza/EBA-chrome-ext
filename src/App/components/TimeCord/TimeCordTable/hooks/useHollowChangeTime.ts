import { timeCalc } from '../../util'
import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from '../../../../hooks'

export const useHollowChangeTime = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return (targetIndex: number, timeTypeName: 'goingOutTime' | 'returnTime', inputTypeName: 'hours' | 'minutes') =>
    ({ target: { value } }) => {
      setTimeCardState((prev) => {
        const newData = prev.bodyData.map((object, index) => {
          if (targetIndex === index) {
            const hoursOrMinutes = inputTypeName === 'hours'
            const hoursValueName = `${timeTypeName}HoursValue`
            const minutesValueName = `${timeTypeName}MinutesValue`
            const calcValueName = `${timeTypeName}CalcValue`
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
