import { DayType, Days } from '../types/TimeCardTypes/BodyData/Days'

type getDays = (tds: HTMLTableDataCellElement[]) => Days

type GetDayType = (text: string) => DayType

const getDayType: GetDayType = (text) => {
  switch (true) {
    case /祝/.test(text):
      return 'holiday'
    case /土/.test(text):
      return 'saturday'
    case /日/.test(text):
      return 'sunday'
    default:
      return 'weekday'
  }
}

export const getDays: getDays = (tds) => {
  if (!tds.length) {
    return {
      dayType: 'weekday',
      name: '',
      text: '',
      value: '',
    }
  }
  const td = tds[0]
  const input = td.querySelector('input')
  const text = td?.textContent?.trim() || ''

  return {
    dayType: getDayType(text),
    name: input?.name || '',
    text,
    value: input?.value || '',
  }
}
