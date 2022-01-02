import { minutesRound } from '../util'
import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'

export const useCheckBasicTimeMinutes = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return () => {
    setTimeCardState((prev) => {
      try {
        return {
          ...prev,
          basicTime: {
            ...prev.basicTime,
            basicTimeStartMinutesValue: minutesRound(prev.basicTime.basicTimeStartMinutesValue),
            basicTimeEndMinutesValue: minutesRound(prev.basicTime.basicTimeEndMinutesValue),
            basicTimeBreakMinutesValue: minutesRound(prev.basicTime.basicTimeBreakMinutesValue),
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
