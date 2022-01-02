import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'

export const useChangeBasicTime = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return (e) => {
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
