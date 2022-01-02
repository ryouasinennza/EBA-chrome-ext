export type Kinds = {
  selectedName: string
  selectedValue: string
  kindTypeErrorName: string
  kindTypeErrorValue: string
  paidTimeName: string
  paidTimeValue: string
}

type GetKinds = (tds: HTMLTableDataCellElement[]) => Kinds

const kindsIndex = 13
const kindTypeErrorIndex = 0
const paidTimeIndex = 1

export const getKinds: GetKinds = (tds) => {
  const td = tds[kindsIndex]
  const select = td.querySelector('select')
  const option: HTMLOptionElement = td.querySelector('select option[selected]')
  const inputs = td.querySelectorAll('input')

  return {
    selectedName: select.name,
    selectedValue: option ? option.value : '0',
    kindTypeErrorName: inputs[kindTypeErrorIndex].name,
    kindTypeErrorValue: inputs[kindTypeErrorIndex].value,
    paidTimeName: inputs[paidTimeIndex].name,
    paidTimeValue: inputs[paidTimeIndex].value,
  }
}
