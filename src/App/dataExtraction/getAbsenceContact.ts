import { AbsenceContact } from '../types/TimeCardTypes/BodyData/AbsenceContact'

type GetAbsenceContact = (tds: HTMLTableDataCellElement[]) => AbsenceContact

const reasonIndex = 15

export const getAbsenceContact: GetAbsenceContact = (tds) => {
  const td = tds[reasonIndex]
  const select = td.querySelector<HTMLSelectElement>('select')
  const option = td.querySelector<HTMLOptionElement>('select option[selected]')
  const input = td.querySelector<HTMLInputElement>('input')

  return {
    combinationErrorName: input?.name || '',
    combinationErrorValue: input?.value || '',
    selectedName: select?.name || '',
    selectedValue: option ? option.value : '0',
  }
}
