import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'
import { checkHours } from '../util'

export const useCheckBasicTimeHours = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return () => {
    setTimeCardState((prev) => {
      if (
        checkHours(prev.basicTime.basicTimeStartHoursValue) &&
        checkHours(prev.basicTime.basicTimeEndHoursValue) &&
        checkHours(prev.basicTime.basicTimeBreakHoursValue)
      ) {
        return {
          ...prev,
          basicTime: {
            ...prev.basicTime,
            error: false,
          },
        }
      } else {
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
