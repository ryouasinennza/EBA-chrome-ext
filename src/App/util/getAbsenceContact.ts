export type AbsenceContact = {
  selectedName: string
  selectedValue: string
  combinationErrorName: string
  combinationErrorValue: string
}

type GetAbsenceContact = (tds: HTMLTableDataCellElement[]) => AbsenceContact

const reasonIndex = 15

export const getAbsenceContact: GetAbsenceContact = (tds) => {
  const td = tds[reasonIndex]
  const select = td.querySelector('select')
  const option: HTMLOptionElement = td.querySelector('select option[selected]')
  const input = td.querySelector('input')

  return {
    selectedName: select.name,
    selectedValue: option ? option.value : '0',
    combinationErrorName: input.name,
    combinationErrorValue: input.value,
  }
}
