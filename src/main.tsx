import * as ReactDOM from 'react-dom'
import { App } from './App'

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
    ReactDOM.render(<App />, react)
  }
}
