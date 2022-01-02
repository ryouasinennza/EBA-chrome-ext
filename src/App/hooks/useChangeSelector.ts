import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'

export const useChangeSelector = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return ({
    target: {
      value,
      dataset: { targetIndex, selectorType },
    },
  }) => {
    setTimeCardState((prev) => {
      const newData = prev.bodyData.map((object, index) => {
        if (Number(targetIndex) === index) {
          return {
            ...object,
            [selectorType]: {
              ...object[selectorType],
              selectedValue: value,
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
