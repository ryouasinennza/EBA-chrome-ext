import { ThemeProvider } from 'styled-components'
import { useLayoutEffect, VFC } from 'react'
import styled from 'styled-components'
import {
  useChangeBasicTime,
  useChangeSelector,
  useChangeText,
  useChangeTime,
  useCheckBasicTimeHours,
  useCheckBasicTimeMinutes,
  useCheckState,
  useHeaderState,
  useHollowChangeTime,
  useSetBasicTime,
  useTimeCardState,
} from './hooks'
import { Header, TimeCord } from './components'
import { theme } from './styles/theme'

export const App: VFC = () => {
  const [headerState] = useHeaderState()
  const { headerLinks, user, sidebarLinks } = headerState
  const [timeCardState, setTimeCardState] = useTimeCardState()

  const onChangeTime = useChangeTime(setTimeCardState)
  const onHollowChangeTime = useHollowChangeTime(setTimeCardState)
  const onCheckState = useCheckState(setTimeCardState)
  const onChangeSelector = useChangeSelector(setTimeCardState)
  const onChangeText = useChangeText(setTimeCardState)
  const changeBasicTime = useChangeBasicTime(setTimeCardState)
  const checkBasicTimeHours = useCheckBasicTimeHours(setTimeCardState)
  const checkBasicTimeMinutes = useCheckBasicTimeMinutes(setTimeCardState)
  const setBasicTime = useSetBasicTime(setTimeCardState)

  useLayoutEffect(() => {
    document.body.style.position = 'relative'
  }, [])

  const changeDate = (e) => {
    setTimeCardState((prev) => {
      return {
        ...prev,
        date: e.target.value,
      }
    })
  }
  const clickCustomerMode = () => {
    window.location.href = `submit_customer?member_no=${user.memberNo}&amp;time_card_year_month=${timeCardState.date}`
  }

  const onSubmit = (e) => {
    if (timeCardState.bodyData.every(({ error }) => !error)) {
      if (window.confirm('変更を保存しますか？')) {
        return true
      } else {
        e.preventDefault()
      }
    }
  }

  if (!timeCardState.bodyData.length) return null

  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <Header headerLinks={headerLinks} sidebarLinks={sidebarLinks} {...user} />
        <TimeCord
          changeBasicTime={changeBasicTime}
          changeDate={changeDate}
          checkBasicTimeHours={checkBasicTimeHours}
          checkBasicTimeMinutes={checkBasicTimeMinutes}
          clickCustomerMode={clickCustomerMode}
          onChangeSelector={onChangeSelector}
          onChangeText={onChangeText}
          onChangeTime={onChangeTime}
          onCheckState={onCheckState}
          onHollowChangeTime={onHollowChangeTime}
          onSubmit={onSubmit}
          setBasicTime={setBasicTime}
          {...user}
          {...timeCardState}
        />
      </ThemeProvider>
    </Wrap>
  )
}

const Wrap = styled('div')`
  background-color: rgb(209 209 209);
  position: absolute;
  width: 100vw;
  top: 0;
  z-index: 10000;
`
