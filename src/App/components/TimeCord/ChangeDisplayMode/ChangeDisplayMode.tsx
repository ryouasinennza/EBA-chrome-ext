import { VFC } from 'react'
import styled from 'styled-components'

export type ChangeDisplayModeProps = {
  changeDisplayMode: (e) => void
  displayMode: {
    customerWork: boolean
    mainOfficeWork: boolean
    hollow: boolean
  }
}

export const ChangeDisplayMode: VFC<ChangeDisplayModeProps> = ({ displayMode, changeDisplayMode }) => {
  console.log(displayMode)
  return (
    <ChangeDisplayModeBox>
      <Button isDisabled={!displayMode.customerWork} data-display-mode="customerWork" onClick={changeDisplayMode}>
        客先勤務
      </Button>
      <Button isDisabled={!displayMode.mainOfficeWork} data-display-mode="mainOfficeWork" onClick={changeDisplayMode}>
        本社勤務
      </Button>
      <Button isDisabled={!displayMode.hollow} data-display-mode="hollow" onClick={changeDisplayMode}>
        中抜け
      </Button>
    </ChangeDisplayModeBox>
  )
}

const ChangeDisplayModeBox = styled('div')`
  justify-content: space-between;
  display: flex;
  width: 260px;
  margin: 8px 0;
`

const Button = styled('button')<{ isDisabled: boolean }>`
  color: ${({ isDisabled }) => (isDisabled ? '#fff' : '#000')};
  width: 80px;
`
