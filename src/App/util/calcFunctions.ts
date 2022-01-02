import { HollowTime, WorkTimes } from './getWorkTimes'
import { BodyData } from '../hooks'

export const timeCalc = (hours: string, minutes: string): string => {
  return `${60 * Number(hours) + Number(minutes)}`
}

export const checkHours = (value: string) => /([01][0-9]|2[0-3])/.test(value)

export const checkMinutes = (value: string) => /[0-5][0-9]/.test(value)

export const minutesRound = (minutes: string) => {
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

const makeTimeText = (total) => {
  const r = total / 60
  const r1 = r.toFixed(1)
  const r2 = String(r1).split('.')
  const hours = r2[0].length === 1 ? `0${r2[0]}` : r2[0]
  const m = `${total - Number(r2[0]) * 60}`
  const minutes = m.length === 1 ? `0${m}` : m

  if (/-/.test(hours) || /-/.test(minutes)) {
    throw new Error()
  }
  return `${hours}:${minutes}`
}

export const sumTime = (object) => {
  const total = sumTimeCalc(object)
  return makeTimeText(total)
}

export const sumTotalTime = (object1: WorkTimes, object2: WorkTimes, object3: HollowTime) => {
  const object1Total = sumTimeCalc(object1)
  const object2Total = sumTimeCalc(object2)
  const object3Total = sumHollowTimeCalc(object3)
  const total = object1Total + object2Total - object3Total
  return makeTimeText(total)
}

export const checkHollow = (goingOutTime, returnTime) => {
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

const splitTime = (timeText) => timeText.split(':')

export const calcOverTime = (timeText) => {
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

const getTimeText = (time) => {
  const hours = Math.trunc(time / 60)
  const minutes = `${time - hours * 60}`
  if (minutes === '0') {
    return `${hours}`
  }
  return `${hours}:${minutes}`
}

export const sumBreakdownTotal = (bodyData: BodyData, type: 'customerWorkTimeText' | 'mainOfficeWorkTimeText') => {
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
