export type TotalDaysData = {
  workingDays: string
  scheduledHoliday: string
  legalHoliday: string
  daysLate: string
  numberOfDaysToLeaveEarly: string
  paidHoliday: string
  alternativeVacation: string
  specialVacation: string
  absence: string
  otherHolidays: string
  deductionHolidays: string
}

type GetTotalDaysData = () => TotalDaysData

// 勤務日
const workingDaysIndex = 0
// 所定休日
const scheduledHolidayIndex = 1
// 法定休日
const legalHolidayIndex = 2
// 遅刻日数
const daysLateIndex = 3
// 早退日数
const numberOfDaysToLeaveEarlyIndex = 4
// 有給休暇
const paidHolidayIndex = 5
// 代替休暇
const alternativeVacationIndex = 6
// 特別休暇
const specialVacationIndex = 7
// 欠勤
const absenceIndex = 8
// その他休
const otherHolidaysIndex = 9
// 控除
const deductionHolidaysIndex = 10

export const getTotalDaysData: GetTotalDaysData = () => {
  const tables = document.querySelectorAll('table')
  const tds = tables[2].querySelectorAll('td')

  const workingDays = tds[workingDaysIndex]?.textContent.trim() || ''
  const scheduledHoliday = tds[scheduledHolidayIndex]?.textContent.trim() || ''
  const legalHoliday = tds[legalHolidayIndex]?.textContent.trim() || ''
  const daysLate = tds[daysLateIndex]?.textContent.trim() || ''
  const numberOfDaysToLeaveEarly = tds[numberOfDaysToLeaveEarlyIndex]?.textContent.trim() || ''
  const paidHoliday = tds[paidHolidayIndex]?.textContent.trim() || ''
  const alternativeVacation = tds[alternativeVacationIndex]?.textContent.trim() || ''
  const specialVacation = tds[specialVacationIndex]?.textContent.trim() || ''
  const absence = tds[absenceIndex]?.textContent.trim() || ''
  const otherHolidays = tds[otherHolidaysIndex]?.textContent.trim() || ''
  const deductionHolidays = tds[deductionHolidaysIndex]?.textContent.trim() || ''

  return {
    workingDays,
    scheduledHoliday,
    legalHoliday,
    daysLate,
    numberOfDaysToLeaveEarly,
    paidHoliday,
    alternativeVacation,
    specialVacation,
    absence,
    otherHolidays,
    deductionHolidays,
  }
}
