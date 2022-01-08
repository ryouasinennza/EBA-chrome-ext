export type AbsenceContact = {
  combinationErrorName: string
  combinationErrorValue: string
  selectedName: string
  selectedValue: string
}

export type Breakdown = {
  customerWorkTimeName: string
  customerWorkTimeText: string
  customerWorkTimeValue: string
  mainOfficeWorkTimeName: string
  mainOfficeWorkTimeText: string
  mainOfficeWorkTimeValue: string
}

type DayType = 'weekday' | 'saturday' | 'sunday' | 'holiday'

export type Days = {
  dayType: DayType
  name: string
  text: string
  value: string
}

export type HollowTime = {
  goingOutTimeCalcName: string
  goingOutTimeCalcValue: string
  // 外出時刻
  goingOutTimeHoursName: string
  goingOutTimeHoursValue: string
  goingOutTimeMinutesName: string
  goingOutTimeMinutesValue: string
  returnTimeCalcName: string
  returnTimeCalcValue: string
  returnTimeErrorName: string
  returnTimeErrorValue: string
  // 戻り時刻
  returnTimeHoursName: string
  returnTimeHoursValue: string
  returnTimeMinutesName: string
  returnTimeMinutesValue: string
}

export type Kinds = {
  kindTypeErrorName: string
  kindTypeErrorValue: string
  paidTimeName: string
  paidTimeValue: string
  selectedName: string
  selectedValue: string
}

export type OverTime = {
  text: string
}

export type Reason = {
  combinationErrorName: string
  combinationErrorValue: string
  selectedName: string
  selectedValue: string
}

export type Remarks = {
  combinationErrorName: string
  combinationErrorValue: string
  remarksName: string
  remarksValue: string
}

export type TotalTime = {
  endName: string
  endValue: string
  startName: string
  startValue: string
  text: string
}

export type WorkStyle = {
  selectedName: string
  selectedValue: string
  workTypeErrorName: string
  workTypeErrorValue: string
}

export type WorkTimes = {
  breakTimeCalcName: string
  breakTimeCalcValue: string
  // 休憩時刻
  breakTimeHoursName: string
  breakTimeHoursValue: string
  breakTimeMinutesName: string
  breakTimeMinutesValue: string
  leaveTimeCalcName: string
  leaveTimeCalcValue: string
  // 退社時刻
  leaveTimeHoursName: string
  leaveTimeHoursValue: string
  leaveTimeMinutesName: string
  leaveTimeMinutesValue: string
  timeOfArrivalCalcName: string
  timeOfArrivalCalcValue: string
  // 出社時刻
  timeOfArrivalHoursName: string
  timeOfArrivalHoursValue: string
  timeOfArrivalMinutesName: string
  timeOfArrivalMinutesValue: string
}

export type BodyData = {
  absenceContact: AbsenceContact
  breakdown: Breakdown
  customerWork: WorkTimes
  days: Days
  error: boolean
  hollow: HollowTime
  kinds: Kinds
  mainOfficeWork: WorkTimes
  overTime: OverTime
  reason: Reason
  remarks: Remarks
  total: TotalTime
  workStyle: WorkStyle
}[]
