import { OverTime } from '../types/TimeCardTypes/BodyData/OverTime'

type GetOverTime = (tds: HTMLTableDataCellElement[]) => OverTime

const overTimeIndex = 12

export const getOverTime: GetOverTime = (tds) => {
  const td = tds[overTimeIndex]
  const textDiv = td.querySelector('div')
  return {
    text: textDiv?.textContent || '',
  }
}
