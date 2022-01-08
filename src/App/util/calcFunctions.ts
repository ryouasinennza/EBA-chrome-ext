import { HollowTime } from '../types/TimeCardTypes/BodyData/HollowTime'
import { WorkTimes } from '../types/TimeCardTypes/BodyData/WorkTimes'

export const timeCalc = (hours: string, minutes: string): string => {
  const bogTimeNumber = 60 * Number(hours)
  return `${bogTimeNumber + Number(minutes)}`
}

export const checkHours = (value: string): boolean => /([01][0-9]|2[0-3])/.test(value)

export const checkMinutes = (value: string): boolean => /[0-5][0-9]/.test(value)

export const minutesRound = (minutes: string): string => {
  if (!checkMinutes(minutes)) {
    throw new Error()
  }
  const f = minutes.substring(0, 1)
  const b = minutes.substring(1)
  const n = Number(`${f}.${b}`)
  const result = Math.round(n)
  if (isNaN(result)) {
    throw new Error()
  }

  return result === 6 ? '00' : `${result}0`
}

const sumTimeCalc = (object: WorkTimes) => {
  const timeOfArrival = Number(object.timeOfArrivalCalcValue)
  const leaveTime = Number(object.leaveTimeCalcValue)
  const breakTime = Number(object.breakTimeCalcValue)
  return leaveTime - timeOfArrival - breakTime
}

const sumHollowTimeCalc = (object: HollowTime) => {
  const goingOutTime = Number(object.goingOutTimeCalcValue)
  const returnTime = Number(object.returnTimeCalcValue)
  return returnTime - goingOutTime
}

const makeTimeText = (total: number): string => {
  const r = total / 60
  const r1 = r.toFixed(1)
  const r2 = String(r1).split('.')
  const hours = r2[0].length === 1 ? `0${r2[0]}` : r2[0]
  const smallTotalNumber = total - Number(r2[0])
  const m = `${smallTotalNumber * 60}`
  const minutes = m.length === 1 ? `0${m}` : m

  if (/-/.test(hours) || /-/.test(minutes)) {
    throw new Error()
  }
  return `${hours}:${minutes}`
}

export const sumTime = (object: WorkTimes): string => {
  const total = sumTimeCalc(object)
  return makeTimeText(total)
}

export const sumTotalTime = (object1: WorkTimes, object2: WorkTimes, object3: HollowTime): string => {
  const object1Total = sumTimeCalc(object1)
  const object2Total = sumTimeCalc(object2)
  const object3Total = sumHollowTimeCalc(object3)
  const total = object1Total + object2Total - object3Total
  return makeTimeText(total)
}

export const checkHollow = (goingOutTime: string, returnTime: string): void => {
  const g = Number(goingOutTime)
  const r = Number(returnTime)

  if (g || r) {
    if (g) {
      if (!r) {
        throw new Error()
      }
    }
    if (r) {
      if (!g) {
        throw new Error()
      }
    }

    if (g >= r) {
      throw new Error()
    }
  }
}

const splitTime = (timeText: string) => timeText.split(':')

export const calcOverTime = (timeText: string): string => {
  const [hours, minutes] = splitTime(timeText)
  const h = String(Number(hours) - 8)

  if (/-/.test(h)) {
    return `00:${minutes}`
  }
  if (h.length === 1) {
    return `0${h}:${minutes}`
  }
  return `${h}:${minutes}`
}

const getTimeText = (time: number) => {
  const hours = Math.trunc(time / 60)
  const smallHoursNumber = time - hours
  const minutes = `${smallHoursNumber * 60}`
  if (minutes === '0') {
    return `${hours}`
  }
  return `${hours}:${minutes}`
}

type BodyData = {
  breakdown: {
    customerWorkTimeText: string
    mainOfficeWorkTimeText: string
  }
}[]

export const sumBreakdownTotal = (
  bodyData: BodyData,
  type: 'customerWorkTimeText' | 'mainOfficeWorkTimeText'
): string => {
  const resultArray = bodyData
    .map((object) => {
      const [hours, minutes] = splitTime(object.breakdown[type])
      return Number(timeCalc(hours, minutes))
    })
    .filter((val) => val !== 0)
  if (resultArray.length) {
    return getTimeText(resultArray.reduce((previousValue, currentValue) => previousValue + currentValue))
  }
  return '0'
}

export const toBoolean = (booleanStr: string): boolean => {
  return booleanStr.toLowerCase() === 'true'
}
