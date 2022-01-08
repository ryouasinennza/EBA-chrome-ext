import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'

type UseChangeText = (setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>) => (e: BaseSyntheticEvent) => void

export const useChangeText: UseChangeText = (setTimeCardState) => {
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
