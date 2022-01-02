import { ThemeProvider } from 'styled-components'
import { VFC } from 'react'
import styled from 'styled-components'
import {
  TimeCardState,
  useChangeBasicTime,
  useChangeDisplayMode,
  useChangeSelector,
  useChangeText,
  useChangeTime,
  useCheckBasicTimeHours,
  useCheckBasicTimeMinutes,
  useCheckState,
  useHollowChangeTime,
  useSetBasicTime,
  useTimeCardState,
} from './hooks'
import { Header, HeaderProps, TimeCord } from './components'
import { theme } from './styles/theme'

type AppProps = {
  headerProps: HeaderProps
  timeCardProps: TimeCardState
}

export const App: VFC<AppProps> = ({ headerProps, timeCardProps }) => {
  const [timeCardState, setTimeCardState] = useTimeCardState(timeCardProps)

  const onChangeTime = useChangeTime(setTimeCardState)
  const onHollowChangeTime = useHollowChangeTime(setTimeCardState)
  const onCheckState = useCheckState(setTimeCardState)
  const onChangeSelector = useChangeSelector(setTimeCardState)
  const onChangeText = useChangeText(setTimeCardState)
  const changeBasicTime = useChangeBasicTime(setTimeCardState)
  const checkBasicTimeHours = useCheckBasicTimeHours(setTimeCardState)
  const checkBasicTimeMinutes = useCheckBasicTimeMinutes(setTimeCardState)
  const setBasicTime = useSetBasicTime(setTimeCardState)
  const changeDisplayMode = useChangeDisplayMode(setTimeCardState)

  const changeDate = (e) => {
    setTimeCardState((prev) => {
      return {
        ...prev,
        date: e.target.value,
      }
    })
  }

  const clickCustomerMode = () => {
    window.location.href = `submit_customer?member_no=${headerProps.user.memberNo}&amp;time_card_year_month=${timeCardState.date}`
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
        <Header {...headerProps} />
        <TimeCord
          changeBasicTime={changeBasicTime}
          changeDate={changeDate}
          checkBasicTimeHours={checkBasicTimeHours}
          checkBasicTimeMinutes={checkBasicTimeMinutes}
          changeDisplayMode={changeDisplayMode}
          clickCustomerMode={clickCustomerMode}
          onChangeSelector={onChangeSelector}
          onChangeText={onChangeText}
          onChangeTime={onChangeTime}
          onCheckState={onCheckState}
          onHollowChangeTime={onHollowChangeTime}
          onSubmit={onSubmit}
          setBasicTime={setBasicTime}
          {...headerProps.user}
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
