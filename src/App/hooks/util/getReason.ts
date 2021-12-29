export type Reason = {
  selectedName: string
  selectedValue: string
  combinationErrorName: string
  combinationErrorValue: string
}

type GetReason = (tds: HTMLTableDataCellElement[]) => Reason

const reasonIndex = 14

export const getReason: GetReason = (tds) => {
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
