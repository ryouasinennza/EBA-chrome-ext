export type BasicTime = {
  basicTimeStartHoursValue: string
  basicTimeStartMinutesValue: string
  basicTimeEndHoursValue: string
  basicTimeEndMinutesValue: string
  basicTimeBreakHoursValue: string
  basicTimeBreakMinutesValue: string
  workType: string
  error: boolean
}

type GetBasicTime = () => BasicTime

const startInputIndex = 0
const endInputIndex = 1
const breakInputIndex = 2
const workTypeInputIndex = 3

export const getBasicTime: GetBasicTime = () => {
  const table = document.querySelector('form table')
  const tds = table.querySelectorAll('td')
  const startInputs = tds[startInputIndex].querySelectorAll('input')
  const endInputs = tds[endInputIndex].querySelectorAll('input')
  const breakInputs = tds[breakInputIndex].querySelectorAll('input')
  const workTypeSelectOptions: HTMLOptionElement[] = Array.from(
    tds[workTypeInputIndex].querySelectorAll('select option')
  )
  const opt = workTypeSelectOptions.find((option) => option.selected)
  return {
    basicTimeStartHoursValue: startInputs[0].value,
    basicTimeStartMinutesValue: startInputs[1].value,
    basicTimeEndHoursValue: endInputs[0].value,
    basicTimeEndMinutesValue: endInputs[1].value,
    basicTimeBreakHoursValue: breakInputs[0].value,
    basicTimeBreakMinutesValue: breakInputs[1].value,
    workType: opt.value,
    error: false,
  }
}
