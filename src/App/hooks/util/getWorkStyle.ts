export type WorkStyle = {
  selectedName: string
  selectedValue: string
  workTypeErrorName: string
  workTypeErrorValue: string
}

type GetWorkStyle = (tds: HTMLTableDataCellElement[]) => WorkStyle

const workStyleIndex = 16

export const getWorkStyle: GetWorkStyle = (tds) => {
  const td = tds[workStyleIndex]
  const select = td.querySelector('select')
  const option: HTMLOptionElement = td.querySelector('select option[selected]')
  const input = td.querySelector('input')
  return {
    selectedName: select.name,
    selectedValue: option ? option.value : '0',
    workTypeErrorName: input.name,
    workTypeErrorValue: input.value,
  }
}
