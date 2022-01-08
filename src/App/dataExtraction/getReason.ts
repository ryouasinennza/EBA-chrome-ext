import { Reason } from '../types/TimeCardTypes/BodyData/Reason'

type GetReason = (tds: HTMLTableDataCellElement[]) => Reason

const reasonIndex = 14

export const getReason: GetReason = (tds) => {
  const td = tds[reasonIndex]
  const select = td.querySelector('select')
  const option = td.querySelector<HTMLOptionElement>('select option[selected]')
  const input = td.querySelector('input')

  return {
    combinationErrorName: input?.name || '',
    combinationErrorValue: input?.value || '',
    selectedName: select?.name || '',
    selectedValue: option ? option.value : '0',
  }
}
