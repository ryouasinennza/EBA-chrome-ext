import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'

export const useChangeText = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return ({
    target: {
      value,
      dataset: { targetIndex },
    },
  }) => {
    setTimeCardState((prev) => {
      const newData = prev.bodyData.map((object, index) => {
        if (Number(targetIndex) === index) {
          return {
            ...object,
            remarks: {
              ...object.remarks,
              remarksValue: value,
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
