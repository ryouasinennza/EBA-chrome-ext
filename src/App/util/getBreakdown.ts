type BreakdownProperties = {
  name: string
  value: string
  text: string
}

type GetBreakdownProperties = (tdElement: HTMLTableDataCellElement) => BreakdownProperties

const getBreakdownProperties: GetBreakdownProperties = (tdElement) => {
  const input = tdElement.querySelector('input')
  const div = tdElement.querySelector('div')
  return {
    name: input.name,
    value: input.value,
    text: div.textContent,
  }
}

export type Breakdown = {
  customerWorkTimeName: string
  customerWorkTimeValue: string
  customerWorkTimeText: string
  mainOfficeWorkTimeName: string
  mainOfficeWorkTimeValue: string
  mainOfficeWorkTimeText: string
}

type GetBreakdown = (tds: HTMLTableDataCellElement[]) => Breakdown

const customerWorkIndex = 9
const mainOfficeWorkIndex = 10
export const getBreakdown: GetBreakdown = (tds) => {
  const customerWorkTime = getBreakdownProperties(tds[customerWorkIndex])
  const mainOfficeWorkTime = getBreakdownProperties(tds[mainOfficeWorkIndex])
  return {
    customerWorkTimeName: customerWorkTime.name,
    customerWorkTimeValue: customerWorkTime.value,
    customerWorkTimeText: customerWorkTime.text,
    mainOfficeWorkTimeName: mainOfficeWorkTime.name,
    mainOfficeWorkTimeValue: mainOfficeWorkTime.value,
    mainOfficeWorkTimeText: mainOfficeWorkTime.text,
  }
}
