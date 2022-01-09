import { BaseSyntheticEvent, VFC } from 'react'
import styled from 'styled-components'

export type ChangeDisplayModeProps = {
  changeDisplayMode: (e: BaseSyntheticEvent) => void
  displayMode: {
    customerWork: boolean
    hollow: boolean
    mainOfficeWork: boolean
  }
}

export const ChangeDisplayMode: VFC<ChangeDisplayModeProps> = ({ displayMode, changeDisplayMode }) => {
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
  display: flex;
  justify-content: space-between;
  width: 260px;
  margin: 8px 0;
`

const Button = styled('button')<{ isDisabled: boolean }>`
  width: 80px;
  color: ${({ isDisabled }) => (isDisabled ? '#fff' : '#000')};
`
