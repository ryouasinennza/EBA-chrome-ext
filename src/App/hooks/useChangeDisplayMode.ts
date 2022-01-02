import { Dispatch, SetStateAction } from 'react'
import { TimeCardState } from './useTimeCardState'
import { toBoolean } from '../util'

export const useChangeDisplayMode = (setTimeCardState: Dispatch<SetStateAction<TimeCardState>>) => {
  return (e) => {
    e.preventDefault()
    setTimeCardState((prev) => {
      const key = e.target.dataset.displayMode
      const value = `${!prev.displayMode[key]}`
      window.localStorage.setItem(`eba-${key}`, value)
      return {
        ...prev,
        displayMode: {
          ...prev.displayMode,
          [key]: toBoolean(value),
        },
      }
    })
  }
}
