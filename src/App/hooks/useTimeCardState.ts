import { Dispatch, SetStateAction, useState } from 'react'
import {
  AbsenceContact,
  BasicTime,
  Breakdown,
  Days,
  HollowTime,
  Kinds,
  OverTime,
  Reason,
  Remarks,
  TotalTime,
  WorkStyle,
  WorkTimes,
  TotalDaysData,
  TotalTimesData,
  CustomData,
} from '../dataExtraction'

export type BodyData = {
  days: Days
  customerWork: WorkTimes
  mainOfficeWork: WorkTimes
  hollow: HollowTime
  breakdown: Breakdown
  total: TotalTime
  overTime: OverTime
  kinds: Kinds
  reason: Reason
  absenceContact: AbsenceContact
  workStyle: WorkStyle
  remarks: Remarks
  error: boolean
}[]

export type TimeCardState = {
  basicTime: BasicTime
  bodyData: BodyData
  date: string
  totalDaysData: TotalDaysData
  totalTimesData: TotalTimesData
  customData: CustomData
}

type UseTimeCardState = (timeCardProps: TimeCardState) => [TimeCardState, Dispatch<SetStateAction<TimeCardState>>]

export const useTimeCardState: UseTimeCardState = (timeCardProps) => {
  const [timeCardState, setTimeCardState] = useState<TimeCardState>(timeCardProps)

  return [timeCardState, setTimeCardState]
}
