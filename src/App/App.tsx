import { BaseSyntheticEvent, VFC, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { Header, HeaderProps, TimeCord } from './components'
import {
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
} from './hooks'
import { theme } from './styles/theme'
import { TimeCardTypes } from './types/TimeCardTypes'

type AppProps = {
  headerProps: HeaderProps
  timeCardProps: TimeCardTypes
}

export const App: VFC<AppProps> = ({ headerProps, timeCardProps }) => {
  const [timeCardState, setTimeCardState] = useState<TimeCardTypes>(timeCardProps)

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

  const changeDate = (e: BaseSyntheticEvent) => {
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

  const onSubmit = (e: BaseSyntheticEvent) => {
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
          checkBasicTimeMinutes={checkBasicTimeMinutes}
          checkBasicTimeHours={checkBasicTimeHours}
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
  position: absolute;
  top: 0;
  z-index: 10000;
  width: 100vw;
  background-color: rgb(209 209 209);
`
