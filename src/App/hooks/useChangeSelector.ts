import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'

interface UseChangeSelectorHTMLSelectElement extends HTMLSelectElement {
  dataset: {
    selectorType: 'reason' | 'kinds' | 'absenceContact' | 'workStyle'
    targetIndex: string
  }
}

type UseChangeSelector = (
  setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>
) => (e: BaseSyntheticEvent<object, HTMLSelectElement, UseChangeSelectorHTMLSelectElement>) => void

export const useChangeSelector: UseChangeSelector = (setTimeCardState) => {
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
