import { BodyData } from '../hooks'
import { sumBreakdownTotal } from '../util'

export type CustomData = {
  customerTotal: string
  headquartersTotal: string
}

type GetCustomData = (bodyData: BodyData) => CustomData

export const getCustomData: GetCustomData = (bodyData) => {
  return {
    customerTotal: sumBreakdownTotal(bodyData, 'customerWorkTimeText'),
    headquartersTotal: sumBreakdownTotal(bodyData, 'mainOfficeWorkTimeText'),
  }
}
