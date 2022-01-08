import { TotalTimesData } from '../types/TimeCardTypes/TotalTimesData'

type GetTotalTimesData = () => TotalTimesData

// 普通残業
const overTimeNormalOvertimeIndex = 0
// 深夜残業
const overTimeMidnightOvertimeIndex = 1
// 所定休日(残業)
const overTimeScheduledHolidayIndex = 2
// 所定休日深夜(残業)
const overTimeScheduledHolidayMidnightIndex = 3
// 法定休日(残業)
const overTimeLegalHolidayIndex = 4
// 法定休日深夜(残業)
const overTimeLegalHolidayMidnightIndex = 5
// 合計(残業)
const overTimeTotalIndex = 6
// 平日(実働時間)
const actualWorkWeekdayTotalIndex = 7
// 所定休日(実働時間)
const actualWorkScheduledHolidayIndex = 8
// 法定休日(実働時間)
const actualWorkLegalHolidayIndex = 9
// 総合計(実働時間)
const actualWorkTotalIndex = 10

export const getTotalTimesData: GetTotalTimesData = () => {
  const tables = document.querySelectorAll('table')
  const tds = tables[3].querySelectorAll('td')

  const overTimeNormalOvertime = tds[overTimeNormalOvertimeIndex]?.textContent?.trim() || ''
  const overTimeMidnightOvertime = tds[overTimeMidnightOvertimeIndex]?.textContent?.trim() || ''
  const overTimeScheduledHoliday = tds[overTimeScheduledHolidayIndex]?.textContent?.trim() || ''
  const overTimeScheduledHolidayMidnight = tds[overTimeScheduledHolidayMidnightIndex]?.textContent?.trim() || ''
  const overTimeLegalHoliday = tds[overTimeLegalHolidayIndex]?.textContent?.trim() || ''
  const overTimeLegalHolidayMidnight = tds[overTimeLegalHolidayMidnightIndex]?.textContent?.trim() || ''
  const overTimeTotal = tds[overTimeTotalIndex]?.textContent?.trim() || ''
  const actualWorkWeekdayTotal = tds[actualWorkWeekdayTotalIndex]?.textContent?.trim() || ''
  const actualWorkScheduledHoliday = tds[actualWorkScheduledHolidayIndex]?.textContent?.trim() || ''
  const actualWorkLegalHoliday = tds[actualWorkLegalHolidayIndex]?.textContent?.trim() || ''
  const actualWorkTotal = tds[actualWorkTotalIndex]?.textContent?.trim() || ''

  return {
    actualWorkLegalHoliday,
    actualWorkScheduledHoliday,
    actualWorkTotal,
    actualWorkWeekdayTotal,
    overTimeLegalHoliday,
    overTimeLegalHolidayMidnight,
    overTimeMidnightOvertime,
    overTimeNormalOvertime,
    overTimeScheduledHoliday,
    overTimeScheduledHolidayMidnight,
    overTimeTotal,
  }
}
