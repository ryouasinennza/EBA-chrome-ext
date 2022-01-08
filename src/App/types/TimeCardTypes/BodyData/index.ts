import { AbsenceContact } from './AbsenceContact'
import { Breakdown } from './Breakdown'
import { Days } from './Days'
import { HollowTime } from './HollowTime'
import { Kinds } from './Kinds'
import { OverTime } from './OverTime'
import { Reason } from './Reason'
import { Remarks } from './Remarks'
import { TotalTime } from './TotalTime'
import { WorkStyle } from './WorkStyle'
import { WorkTimes } from './WorkTimes'

type BodyDataObject = {
  absenceContact: AbsenceContact
  breakdown: Breakdown
  customerWork: WorkTimes
  days: Days
  error: boolean
  hollow: HollowTime
  kinds: Kinds
  mainOfficeWork: WorkTimes
  overTime: OverTime
  reason: Reason
  remarks: Remarks
  total: TotalTime
  workStyle: WorkStyle
}

export type BodyData = BodyDataObject[]
