import { timeCalc } from '../../util'
import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from '../../../../hooks'

export const useChangeTime = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return (
      propName: 'customerWork' | 'mainOfficeWork',
      targetIndex: number,
      timeTypeName: 'timeOfArrival' | 'leaveTime' | 'breakTime',
      inputTypeName: 'hours' | 'minutes'
    ) =>
    ({ target: { value } }) => {
      setTimeCardState((prev) => {
        const newData = prev.bodyData.map((object, index) => {
          if (targetIndex === index) {
            const hoursOrMinutes = inputTypeName === 'hours'
            const hoursValueName = `${timeTypeName}HoursValue`
            const minutesValueName = `${timeTypeName}MinutesValue`
            const calcValueName = `${timeTypeName}CalcValue`
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
