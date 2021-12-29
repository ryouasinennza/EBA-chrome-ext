import { useLayoutEffect, VFC } from 'react'
import styled from 'styled-components'
import { useHeaderState, useTimeCardState } from './hooks'
import { Header, TimeCord } from './components'

export const App: VFC = () => {
  const [headerState] = useHeaderState()
  const { headerLinks, user, sidebarLinks } = headerState
  const [timeCardState, setTimeCardState] = useTimeCardState()

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
    e.preventDefault()
    const inputs: HTMLInputElement[] = Array.from(e.target.querySelectorAll('input'))
    const names = inputs
      .filter((input) => {
        return !!input?.name
      })
      .map((nameInput) => {
        return nameInput.name
      })
      .sort()
    console.log(JSON.stringify(names))
  }

  if (!timeCardState.bodyData.length) return null
  console.log(timeCardState)
  return (
    <Wrap>
      <Header
        name={user.name}
        belongs={user.belongs}
        memberNo={user.memberNo}
        headerLinks={headerLinks}
        sidebarLinks={sidebarLinks}
      />
      <TimeCord
        basicTime={timeCardState.basicTime}
        bodyData={timeCardState.bodyData}
        changeDate={changeDate}
        clickCustomerMode={clickCustomerMode}
        date={timeCardState.date}
        memberNo={user.memberNo}
        onSubmit={onSubmit}
        uniqueId={user.uniqueId}
        setTimeCardState={setTimeCardState}
      />
    </Wrap>
  )
}

const Wrap = styled('div')`
  background-color: #fff;
  position: absolute;
  width: 100vw;
  top: 0;
  z-index: 10000;
`
