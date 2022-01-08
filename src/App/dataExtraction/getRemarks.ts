import { Remarks } from '../types/TimeCardTypes/BodyData/Remarks'

type GetRemarks = (tds: HTMLTableDataCellElement[]) => Remarks

const remarksIndex = 17
const remarksInputIndex = 0
const combinationErrorIndex = 1

export const getRemarks: GetRemarks = (tds) => {
  const td = tds[remarksIndex]
  const inputs = td.querySelectorAll('input')
  return {
    combinationErrorName: inputs[combinationErrorIndex].name,
    combinationErrorValue: inputs[combinationErrorIndex].value,
    remarksName: inputs[remarksInputIndex].name,
    remarksValue: inputs[remarksInputIndex].value,
  }
}
