import 'styled-components'

export const theme = {
  primaryBGColor: '#fff',
  secondaryBGColor: '#cccccc',
  hoverBGColor: '#cccccc',
  displayButtonBGColor: 'orange',
  saveButtonBGColor: 'green',
  customerButtonBGColor: 'blue',
  setBasicTimeButtonBGColor: 'red',
  textColor: '#000',
  buttonTextColor: '#fff',
  borderRadius: '4px',
  borderColor: '#717171',
  trColor: {
    error: 'red',
    weekday: 'transparent',
    saturday: '#B4DCFF',
    sunday: '#F5C8C8',
    holiday: '#F5C8C8',
  },
} as const

export type TrColorProperty = 'error' | 'weekday' | 'saturday' | 'sunday' | 'holiday'

type AppTheme = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
