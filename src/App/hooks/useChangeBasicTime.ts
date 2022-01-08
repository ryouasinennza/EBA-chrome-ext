import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'

type UseChangeBasicTime = (setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>) => (e: BaseSyntheticEvent) => void

export const useChangeBasicTime: UseChangeBasicTime = (setTimeCardState) => {
  return (e: BaseSyntheticEvent) => {
    setTimeCardState((prev) => {
      return {
        ...prev,
        basicTime: {
          ...prev.basicTime,
          [e.target.dataset.input]: e.target.value,
        },
      }
    })
  }
}
