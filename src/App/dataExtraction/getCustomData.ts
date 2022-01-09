import { BodyData } from '../types/TimeCardTypes/BodyData'
import { CustomData } from '../types/TimeCardTypes/CustomData'
import { sumBreakdownTotal } from '../util'

type GetCustomData = (bodyData: BodyData) => CustomData

export const getCustomData: GetCustomData = (bodyData) => {
  return {
    customerTotal: sumBreakdownTotal(bodyData, 'customerWorkTimeText'),
    headquartersTotal: sumBreakdownTotal(bodyData, 'mainOfficeWorkTimeText'),
  }
}
