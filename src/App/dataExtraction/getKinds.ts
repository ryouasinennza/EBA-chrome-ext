import { Kinds } from '../types/TimeCardTypes/BodyData/Kinds'

type GetKinds = (tds: HTMLTableDataCellElement[]) => Kinds

const kindsIndex = 13
const kindTypeErrorIndex = 0
const paidTimeIndex = 1

export const getKinds: GetKinds = (tds) => {
  const td = tds[kindsIndex]
  const select = td.querySelector<HTMLSelectElement>('select')
  const option = td.querySelector<HTMLOptionElement>('select option[selected]')
  const inputs = td.querySelectorAll<HTMLInputElement>('input')

  return {
    kindTypeErrorName: inputs[kindTypeErrorIndex]?.name || '',
    kindTypeErrorValue: inputs[kindTypeErrorIndex]?.value || '',
    paidTimeName: inputs[paidTimeIndex]?.name || '',
    paidTimeValue: inputs[paidTimeIndex]?.value || '',
    selectedName: select?.name || '',
    selectedValue: option ? option.value : '0',
  }
}
