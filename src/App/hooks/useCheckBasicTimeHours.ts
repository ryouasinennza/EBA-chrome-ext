import { Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'
import { checkHours } from '../util'

type UseCheckBasicTimeHours = (setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>) => () => void

export const useCheckBasicTimeHours: UseCheckBasicTimeHours = (setTimeCardState) => {
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
