import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  getAbsenceContact,
  getBasicTime,
  getBreakdown,
  getDays,
  getHollowTime,
  getKinds,
  getOverTime,
  getReason,
  getRemarks,
  getTotalTime,
  getWorkStyle,
  getWorkTimes,
  getTotalDaysData,
  getTotalTimesData,
  calcCustomData,
  AbsenceContact,
  BasicTime,
  Breakdown,
  Days,
  HollowTime,
  Kinds,
  OverTime,
  Reason,
  Remarks,
  TotalTime,
  WorkStyle,
  WorkTimes,
  TotalDaysData,
  TotalTimesData,
  CustomData,
} from '../util'

export type BodyData = {
  days: Days
  customerWork: WorkTimes
  mainOfficeWork: WorkTimes
  hollow: HollowTime
  breakdown: Breakdown
  total: TotalTime
  overTime: OverTime
  kinds: Kinds
  reason: Reason
  absenceContact: AbsenceContact
  workStyle: WorkStyle
  remarks: Remarks
  error: boolean
}[]

export type TimeCardState = {
  basicTime: BasicTime
  bodyData: BodyData
  date: string
  totalDaysData: TotalDaysData
  totalTimesData: TotalTimesData
  customData: CustomData
}

type UseTimeCardState = () => [TimeCardState, Dispatch<SetStateAction<TimeCardState>>]

export const useTimeCardState: UseTimeCardState = () => {
  const [timeCardState, setTimeCardState] = useState<TimeCardState>({
    basicTime: {
      basicTimeStartHoursValue: '',
      basicTimeStartMinutesValue: '',
      basicTimeEndHoursValue: '',
      basicTimeEndMinutesValue: '',
      basicTimeBreakHoursValue: '',
      basicTimeBreakMinutesValue: '',
      workType: '',
      error: false,
    },
    bodyData: [],
    date: '',
    totalDaysData: {
      workingDays: '',
      scheduledHoliday: '',
      legalHoliday: '',
      daysLate: '',
      numberOfDaysToLeaveEarly: '',
      paidHoliday: '',
      alternativeVacation: '',
      specialVacation: '',
      absence: '',
      otherHolidays: '',
      deductionHolidays: '',
    },
    totalTimesData: {
      overTimeNormalOvertime: '',
      overTimeMidnightOvertime: '',
      overTimeScheduledHoliday: '',
      overTimeScheduledHolidayMidnight: '',
      overTimeLegalHoliday: '',
      overTimeLegalHolidayMidnight: '',
      overTimeTotal: '',
      actualWorkWeekdayTotal: '',
      actualWorkScheduledHoliday: '',
      actualWorkLegalHoliday: '',
      actualWorkTotal: '',
    },
    customData: {
      customerTotal: '',
      headquartersTotal: '',
    },
  })

  useEffect(() => {
    const date: HTMLInputElement = document.querySelector('input[name="time_card_year_month"]')
    const tbody = document.querySelector('#time_card table.timecard_table > tbody')
    const trElements: HTMLTableRowElement[] = Array.from(tbody.querySelectorAll('tr'))
    const bodyData = trElements.map((tr) => {
      const tds = Array.from(tr.querySelectorAll('td'))
      return {
        days: getDays(tds),
        customerWork: getWorkTimes(tds, 1, 4),
        mainOfficeWork: getWorkTimes(tds, 4, 7),
        hollow: getHollowTime(tds, 7, 9),
        breakdown: getBreakdown(tds),
        total: getTotalTime(tds),
        overTime: getOverTime(tds),
        kinds: getKinds(tds),
        reason: getReason(tds),
        absenceContact: getAbsenceContact(tds),
        workStyle: getWorkStyle(tds),
        remarks: getRemarks(tds),
        error: false,
      }
    })

    setTimeCardState({
      basicTime: getBasicTime(),
      bodyData,
      date: date.value,
      totalDaysData: getTotalDaysData(),
      totalTimesData: getTotalTimesData(),
      customData: calcCustomData(bodyData),
    })
  }, [])
  return [timeCardState, setTimeCardState]
}
