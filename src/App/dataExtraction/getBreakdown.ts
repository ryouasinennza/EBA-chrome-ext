import { Breakdown } from '../types/TimeCardTypes/BodyData/Breakdown'

type BreakdownProperties = {
  name: string
  text: string
  value: string
}

type GetBreakdownProperties = (tdElement: HTMLTableDataCellElement) => BreakdownProperties

const getBreakdownProperties: GetBreakdownProperties = (tdElement) => {
  const input = tdElement.querySelector('input')
  const div = tdElement.querySelector('div')
  return {
    name: input?.name || '',
    text: div?.textContent || '',
    value: input?.value || '',
  }
}

type GetBreakdown = (tds: HTMLTableDataCellElement[]) => Breakdown

const customerWorkIndex = 9
const mainOfficeWorkIndex = 10
export const getBreakdown: GetBreakdown = (tds) => {
  const customerWorkTime = getBreakdownProperties(tds[customerWorkIndex])
  const mainOfficeWorkTime = getBreakdownProperties(tds[mainOfficeWorkIndex])
  return {
    customerWorkTimeName: customerWorkTime.name,
    customerWorkTimeText: customerWorkTime.text,
    customerWorkTimeValue: customerWorkTime.value,
    mainOfficeWorkTimeName: mainOfficeWorkTime.name,
    mainOfficeWorkTimeText: mainOfficeWorkTime.text,
    mainOfficeWorkTimeValue: mainOfficeWorkTime.value,
  }
}
