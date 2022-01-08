import { HollowTime } from '../types/TimeCardTypes/BodyData/HollowTime'
import { WorkTimes } from '../types/TimeCardTypes/BodyData/WorkTimes'

type GetWorkTimes = (tds: HTMLTableDataCellElement[], startIndex: number, endIndex: number) => WorkTimes

const timeOfArrivalIndex = 0
const leaveTimeIndex = 1
const breakTimeIndex = 2

export const getWorkTimes: GetWorkTimes = (tds, startIndex, endIndex) => {
  const WorkTimesTds = tds.slice(startIndex, endIndex)
  const timeOfArrival = Array.from(WorkTimesTds[timeOfArrivalIndex].querySelectorAll('input'))
  const leaveTime = Array.from(WorkTimesTds[leaveTimeIndex].querySelectorAll('input'))
  const breakTime = Array.from(WorkTimesTds[breakTimeIndex].querySelectorAll('input'))

  return {
    breakTimeCalcName: breakTime[2]?.name || '',

    breakTimeCalcValue: breakTime[2]?.value || '0',

    // 休憩時刻
    breakTimeHoursName: breakTime[0]?.name || '',
    breakTimeHoursValue: breakTime[0]?.value || '0',
    breakTimeMinutesName: breakTime[1]?.name || '',
    breakTimeMinutesValue: breakTime[1]?.value || '0',
    leaveTimeCalcName: leaveTime[2]?.name || '',
    leaveTimeCalcValue: leaveTime[2]?.value || '0',
    // 退社時刻
    leaveTimeHoursName: leaveTime[0]?.name || '',
    leaveTimeHoursValue: leaveTime[0]?.value || '0',
    leaveTimeMinutesName: leaveTime[1]?.name || '',
    leaveTimeMinutesValue: leaveTime[1]?.value || '0',
    timeOfArrivalCalcName: timeOfArrival[2]?.name || '',
    timeOfArrivalCalcValue: timeOfArrival[2]?.value || '0',
    // 出社時刻
    timeOfArrivalHoursName: timeOfArrival[0]?.name || '',
    timeOfArrivalHoursValue: timeOfArrival[0]?.value || '0',
    timeOfArrivalMinutesName: timeOfArrival[1]?.name || '',
    timeOfArrivalMinutesValue: timeOfArrival[1]?.value || '0',
  }
}

type GetHollowTime = (tds: HTMLTableDataCellElement[], startIndex: number, endIndex: number) => HollowTime

const goingOutTimeIndex = 0
const returnTimeIndex = 1

export const getHollowTime: GetHollowTime = (tds, startIndex, endIndex) => {
  const WorkTimesTds = tds.slice(startIndex, endIndex)
  const goingOutTime = Array.from(WorkTimesTds[goingOutTimeIndex].querySelectorAll('input'))
  const returnTime = Array.from(WorkTimesTds[returnTimeIndex].querySelectorAll('input'))

  return {
    goingOutTimeCalcName: goingOutTime[2]?.name || '',
    goingOutTimeCalcValue: goingOutTime[3]?.value || '0',
    // 外出時刻
    goingOutTimeHoursName: goingOutTime[0]?.name || '',
    goingOutTimeHoursValue: goingOutTime[0]?.value || '0',
    goingOutTimeMinutesName: goingOutTime[1]?.name || '',
    goingOutTimeMinutesValue: goingOutTime[1]?.value || '0',
    returnTimeCalcName: returnTime[2]?.name || '',
    returnTimeCalcValue: returnTime[2]?.value || '0',
    returnTimeErrorName: returnTime[3]?.name || '',
    returnTimeErrorValue: returnTime[3]?.value || '0',
    // 戻り時刻
    returnTimeHoursName: returnTime[0]?.name || '',
    returnTimeHoursValue: returnTime[0]?.value || '0',
    returnTimeMinutesName: returnTime[1]?.name || '',
    returnTimeMinutesValue: returnTime[1]?.value || '0',
  }
}
