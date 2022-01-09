/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

export const theme = {
  borderColor: '#717171',
  borderRadius: '4px',
  buttonTextColor: '#fff',
  customerButtonBGColor: 'blue',
  displayButtonBGColor: 'orange',
  hoverBGColor: '#cccccc',
  primaryBGColor: '#fff',
  saveButtonBGColor: 'green',
  secondaryBGColor: '#cccccc',
  setBasicTimeButtonBGColor: 'red',
  textColor: '#000',
  trColor: {
    error: 'red',
    holiday: '#F5C8C8',
    saturday: '#B4DCFF',
    sunday: '#F5C8C8',
    weekday: 'transparent',
  },
} as const

export type TrColorProperty = 'error' | 'weekday' | 'saturday' | 'sunday' | 'holiday'

type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
