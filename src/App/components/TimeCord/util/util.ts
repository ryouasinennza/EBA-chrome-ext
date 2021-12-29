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

export const sumTotalTime = (object) => {
  const timeOfArrival = Number(object.timeOfArrivalCalcValue)
  const leaveTime = Number(object.leaveTimeCalcValue)
  const breakTime = Number(object.breakTimeCalcValue)
  const total = leaveTime - timeOfArrival - breakTime
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
