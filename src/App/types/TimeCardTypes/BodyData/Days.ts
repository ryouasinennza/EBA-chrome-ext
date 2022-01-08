export type DayType = 'weekday' | 'saturday' | 'sunday' | 'holiday'

export type Days = {
  dayType: DayType
  name: string
  text: string
  value: string
}
