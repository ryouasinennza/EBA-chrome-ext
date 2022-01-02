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
    const originalContent: HTMLDivElement = document.querySelector('body > .wrapper')
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

    const date: HTMLInputElement = document.querySelector('input[name="time_card_year_month"]')
    const tbody = document.querySelector('#time_card table.timecard_table > tbody')
    const trElements: HTMLTableRowElement[] = Array.from(tbody.querySelectorAll('tr'))
    const bodyData = trElements.map((tr) => {
      const tds = Array.from(tr.querySelectorAll('td'))
      return {
        days: getDays(tds),
        customerWork: getWorkTimes(tds, 1, 4),
        mainOfficeWork: getWorkTimes(tds, 4, 7),
        hollow: getHollowTime(tds, 7, 9),
        breakdown: getBreakdown(tds),
        total: getTotalTime(tds),
        overTime: getOverTime(tds),
        kinds: getKinds(tds),
        reason: getReason(tds),
        absenceContact: getAbsenceContact(tds),
        workStyle: getWorkStyle(tds),
        remarks: getRemarks(tds),
        error: false,
      }
    })

    const timeCardProps = {
      basicTime: getBasicTime(),
      bodyData,
      date: date.value,
      totalDaysData: getTotalDaysData(),
      totalTimesData: getTotalTimesData(),
      customData: getCustomData(bodyData),
      displayMode: {
        customerWork: toBoolean(window.localStorage.getItem('eba-customerWork') || ''),
        mainOfficeWork: toBoolean(window.localStorage.getItem('eba-mainOfficeWork') || ''),
        hollow: toBoolean(window.localStorage.getItem('eba-hollow') || ''),
      },
    }

    document.body.style.position = 'relative'

    ReactDOM.render(<App headerProps={headerProps} timeCardProps={timeCardProps} />, react)
  }
}
