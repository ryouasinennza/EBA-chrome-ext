import { BasicTime } from '../types/TimeCardTypes/BasicTime'

type GetBasicTime = () => BasicTime

const startInputIndex = 0
const endInputIndex = 1
const breakInputIndex = 2
const workTypeInputIndex = 3

export const getBasicTime: GetBasicTime = () => {
  const table = document.querySelector<HTMLTableElement>('form table')
  if (!table) {
    return {
      basicTimeBreakHoursValue: '',
      basicTimeBreakMinutesValue: '',
      basicTimeEndHoursValue: '',
      basicTimeEndMinutesValue: '',
      basicTimeStartHoursValue: '',
      basicTimeStartMinutesValue: '',
      error: false,
      workType: '',
    }
  }
  const tds = table.querySelectorAll<HTMLTableDataCellElement>('td')
  const startInputs = tds[startInputIndex].querySelectorAll('input')
  const endInputs = tds[endInputIndex].querySelectorAll('input')
  const breakInputs = tds[breakInputIndex].querySelectorAll('input')
  const workTypeSelectOptions: HTMLOptionElement[] = Array.from(
    tds[workTypeInputIndex].querySelectorAll('select option')
  )
  const opt = workTypeSelectOptions.find((option) => option.selected)
  return {
    basicTimeBreakHoursValue: breakInputs[0].value,
    basicTimeBreakMinutesValue: breakInputs[1].value,
    basicTimeEndHoursValue: endInputs[0].value,
    basicTimeEndMinutesValue: endInputs[1].value,
    basicTimeStartHoursValue: startInputs[0].value,
    basicTimeStartMinutesValue: startInputs[1].value,
    error: false,
    workType: opt?.value || '',
  }
}
