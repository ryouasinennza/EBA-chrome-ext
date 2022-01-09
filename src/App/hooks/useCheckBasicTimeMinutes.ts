import { Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'
import { minutesRound } from '../util'

type UseCheckBasicTimeMinutes = (setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>) => () => void

export const useCheckBasicTimeMinutes: UseCheckBasicTimeMinutes = (setTimeCardState) => {
  return () => {
    setTimeCardState((prev) => {
      try {
        return {
          ...prev,
          basicTime: {
            ...prev.basicTime,
            basicTimeBreakMinutesValue: minutesRound(prev.basicTime.basicTimeBreakMinutesValue),
            basicTimeEndMinutesValue: minutesRound(prev.basicTime.basicTimeEndMinutesValue),
            basicTimeStartMinutesValue: minutesRound(prev.basicTime.basicTimeStartMinutesValue),
            error: false,
          },
        }
      } catch (e) {
        return {
          ...prev,
          basicTime: {
            ...prev.basicTime,
            error: true,
          },
        }
      }
    })
  }
}
