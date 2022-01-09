import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react'
import { TimeCardTypes } from '../types/TimeCardTypes'
import { DisplayModeKey } from '../types/TimeCardTypes/DisplayMode'
import { toBoolean } from '../util'
type UseChangeDisplayMode = (
  setTimeCardState: Dispatch<SetStateAction<TimeCardTypes>>
) => (e: BaseSyntheticEvent) => void

export const useChangeDisplayMode: UseChangeDisplayMode = (setTimeCardState) => {
  return (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setTimeCardState((prev) => {
      const key: DisplayModeKey = e.target.dataset.displayMode
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
