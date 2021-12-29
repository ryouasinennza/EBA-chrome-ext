export type TotalTime = {
  text: string
  startName: string
  startValue: string
  endName: string
  endValue: string
}

type GetTotalTime = (tds: HTMLTableDataCellElement[]) => TotalTime

const totalIndex = 11
const startInputIndex = 1
const endInputIndex = 2

export const getTotalTime: GetTotalTime = (tds) => {
  const td = tds[totalIndex]
  const textDiv = td.querySelector('div')
  const inputs = td.querySelectorAll('input')

  return {
    text: textDiv.textContent,
    startName: inputs[startInputIndex].name,
    startValue: inputs[startInputIndex].value,
    endName: inputs[endInputIndex].name,
    endValue: inputs[endInputIndex].value,
  }
}
