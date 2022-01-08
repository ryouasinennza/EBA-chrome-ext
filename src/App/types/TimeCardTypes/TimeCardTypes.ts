import { BasicTime } from './BasicTime'
import { BodyData } from './BodyData'
import { CustomData } from './CustomData'
import { DisplayMode } from './DisplayMode'
import { TotalDaysData } from './TotalDaysData'
import { TotalTimesData } from './TotalTimesData'

export type TimeCardTypes = {
  basicTime: BasicTime
  bodyData: BodyData
  customData: CustomData
  date: string
  displayMode: DisplayMode
  totalDaysData: TotalDaysData
  totalTimesData: TotalTimesData
}
