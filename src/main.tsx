import * as ReactDOM from 'react-dom'
import { App } from './App'
import {
  getAbsenceContact,
  getBasicTime,
  getBreakdown,
  getCustomData,
  getDays,
  getElementLinks,
  getHollowTime,
  getKinds,
  getOverTime,
  getReason,
  getRemarks,
  getTotalDaysData,
  getTotalTime,
  getTotalTimesData,
  getUserData,
  getWorkStyle,
  getWorkTimes,
} from './App/dataExtraction'
import { toBoolean } from './App/util'

const changeDisplayButton = document.createElement('button')
changeDisplayButton.style.position = 'fixed'
changeDisplayButton.style.top = '8px'
changeDisplayButton.style.right = '8px'
changeDisplayButton.style.zIndex = '20000'
changeDisplayButton.textContent = '画面切り替え'
window.onload = () => {
  const id = document.querySelector('#time_card')
  if (id) {
    const body = document.querySelector('body')
    const react = document.createElement('div')
    const originalContent = document.querySelector<HTMLDivElement>('body > .wrapper')
    if (!originalContent || !body) {
      return false
    }
    originalContent.style.display = 'none'
    changeDisplayButton.addEventListener('click', () => {
      if (react.style.display === 'none') {
        react.style.display = 'block'
        originalContent.style.display = 'none'
      } else {
        react.style.display = 'none'
        originalContent.style.display = 'block'
      }
    })
    body.appendChild(react)
    body.appendChild(changeDisplayButton)

    const headerProps = {
      headerLinks: getElementLinks('header a'),
      sidebarLinks: getElementLinks('.sidebar-menu a'),
      user: getUserData(),
    }

    const date = document.querySelector<HTMLInputElement>('input[name="time_card_year_month"]')
    const tbody = document.querySelector<HTMLTableElement>('#time_card table.timecard_table > tbody')
    if (!tbody || !date) {
      return false
    }
    const trElements = Array.from(tbody.querySelectorAll<HTMLTableRowElement>('tr'))
    const bodyData = trElements.map((tr) => {
      const tds = Array.from(tr.querySelectorAll('td'))
      return {
        absenceContact: getAbsenceContact(tds),
        breakdown: getBreakdown(tds),
        customerWork: getWorkTimes(tds, 1, 4),
        days: getDays(tds),
        error: false,
        hollow: getHollowTime(tds, 7, 9),
        kinds: getKinds(tds),
        mainOfficeWork: getWorkTimes(tds, 4, 7),
        overTime: getOverTime(tds),
        reason: getReason(tds),
        remarks: getRemarks(tds),
        total: getTotalTime(tds),
        workStyle: getWorkStyle(tds),
      }
    })

    const timeCardProps = {
      basicTime: getBasicTime(),
      bodyData,
      customData: getCustomData(bodyData),
      date: date.value,
      displayMode: {
        customerWork: toBoolean(window.localStorage.getItem('eba-customerWork') || ''),
        hollow: toBoolean(window.localStorage.getItem('eba-hollow') || ''),
        mainOfficeWork: toBoolean(window.localStorage.getItem('eba-mainOfficeWork') || ''),
      },
      totalDaysData: getTotalDaysData(),
      totalTimesData: getTotalTimesData(),
    }

    document.body.style.position = 'relative'

    ReactDOM.render(<App headerProps={headerProps} timeCardProps={timeCardProps} />, react)
  }
}
