import { BodyData } from '../hooks'
import { sumBreakdownTotal } from './calcFunctions'

export type CustomData = {
  customerTotal: string
  headquartersTotal: string
}

type CalcCustomData = (bodyData: BodyData) => CustomData

export const calcCustomData: CalcCustomData = (bodyData) => {
  return {
    customerTotal: sumBreakdownTotal(bodyData, 'customerWorkTimeText'),
    headquartersTotal: sumBreakdownTotal(bodyData, 'mainOfficeWorkTimeText'),
  }
}
