export type Remarks = {
  remarksName: string
  remarksValue: string
  combinationErrorName: string
  combinationErrorValue: string
}

type GetRemarks = (tds: HTMLTableDataCellElement[]) => Remarks

const remarksIndex = 17
const remarksInputIndex = 0
const combinationErrorIndex = 1

export const getRemarks: GetRemarks = (tds) => {
  const td = tds[remarksIndex]
  const inputs = td.querySelectorAll('input')
  return {
    remarksName: inputs[remarksInputIndex].name,
    remarksValue: inputs[remarksInputIndex].value,
    combinationErrorName: inputs[combinationErrorIndex].name,
    combinationErrorValue: inputs[combinationErrorIndex].value,
  }
}
