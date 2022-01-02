type DayType = 'weekday' | 'saturday' | 'sunday' | 'holiday'

export type Days = {
  text: string
  value: string
  name: string
  dayType: DayType
}

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
  const td = tds[0]
  const input = td.querySelector('input')
  const text = td.textContent.trim()

  return {
    text,
    value: input.value,
    name: input.name,
    dayType: getDayType(text),
  }
}
