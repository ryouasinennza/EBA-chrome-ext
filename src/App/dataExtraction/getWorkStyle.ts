import { WorkStyle } from '../types/TimeCardTypes/BodyData/WorkStyle'

type GetWorkStyle = (tds: HTMLTableDataCellElement[]) => WorkStyle

const workStyleIndex = 16

export const getWorkStyle: GetWorkStyle = (tds) => {
  const td = tds[workStyleIndex]
  const select = td.querySelector('select')
  const option = td.querySelector<HTMLOptionElement>('select option[selected]')
  const input = td.querySelector('input')
  return {
    selectedName: select?.name || '',
    selectedValue: option ? option.value : '0',
    workTypeErrorName: input?.name || '',
    workTypeErrorValue: input?.value || '',
  }
}
