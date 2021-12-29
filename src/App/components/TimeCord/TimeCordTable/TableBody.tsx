import { Dispatch, SetStateAction, VFC } from 'react'
import { BodyData, TimeCardState } from '../../../hooks'
import { InputTypeHidden, Td, Tr, TwoDigitsInput } from '../../../common'
import { kindsOptions, reasonOptions, trColor } from './constant'
import { useChangeTime, useHollowChangeTime, useCheckState } from './hooks'

export type TableBodyProps = {
  setTimeCardState: Dispatch<SetStateAction<TimeCardState>>
  bodyData: BodyData
}

export const TableBody: VFC<TableBodyProps> = ({ bodyData, setTimeCardState }) => {
  const onChangeTime = useChangeTime(setTimeCardState)
  const onHollowChangeTime = useHollowChangeTime(setTimeCardState)
  const onCheckState = useCheckState(setTimeCardState)

  return (
    <tbody>
      {bodyData.map(
        (
          {
            days,
            customerWork,
            mainOfficeWork,
            hollow,
            breakdown,
            total,
            overTime,
            kinds,
            reason,
            absenceContact,
            workStyle,
            remarks,
            error,
          },
          index
        ) => {
          return (
            <Tr key={`${days.text}-${index}`} BGColor={error ? 'red' : trColor[days.dayType]}>
              {/*日付*/}
              <Td>
                {days.text}
                <InputTypeHidden value={days.value} name={days.name} />
              </Td>
              {/*客先*/}
              <Td>
                <TwoDigitsInput
                  name={customerWork.timeOfArrivalHoursName}
                  value={customerWork.timeOfArrivalHoursValue}
                  onChange={onChangeTime('customerWork', index, 'timeOfArrival', 'hours')}
                  onBlur={onCheckState}
                />
                ：
                <TwoDigitsInput
                  name={customerWork.timeOfArrivalMinutesName}
                  value={customerWork.timeOfArrivalMinutesValue}
                  onChange={onChangeTime('customerWork', index, 'timeOfArrival', 'minutes')}
                  onBlur={onCheckState}
                />
                <InputTypeHidden
                  name={customerWork.timeOfArrivalCalcName}
                  value={customerWork.timeOfArrivalCalcValue}
                />
              </Td>
              <Td>
                <TwoDigitsInput
                  name={customerWork.leaveTimeHoursName}
                  value={customerWork.leaveTimeHoursValue}
                  onChange={onChangeTime('customerWork', index, 'leaveTime', 'hours')}
                  onBlur={onCheckState}
                />
                ：
                <TwoDigitsInput
                  name={customerWork.leaveTimeMinutesName}
                  value={customerWork.leaveTimeMinutesValue}
                  onChange={onChangeTime('customerWork', index, 'leaveTime', 'minutes')}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={customerWork.leaveTimeCalcName} value={customerWork.leaveTimeCalcValue} />
              </Td>
              <Td>
                <TwoDigitsInput
                  name={customerWork.breakTimeHoursName}
                  value={customerWork.breakTimeHoursValue}
                  onChange={onChangeTime('customerWork', index, 'breakTime', 'hours')}
                  onBlur={onCheckState}
                />
                ：
                <TwoDigitsInput
                  name={customerWork.breakTimeMinutesName}
                  value={customerWork.breakTimeMinutesValue}
                  onChange={onChangeTime('customerWork', index, 'breakTime', 'minutes')}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={customerWork.breakTimeCalcName} value={customerWork.breakTimeCalcValue} />
              </Td>
              {/*本社*/}
              <Td>
                <TwoDigitsInput
                  name={mainOfficeWork.timeOfArrivalHoursName}
                  value={mainOfficeWork.timeOfArrivalHoursValue}
                  onChange={onChangeTime('mainOfficeWork', index, 'timeOfArrival', 'hours')}
                  onBlur={onCheckState}
                />
                ：
                <TwoDigitsInput
                  name={mainOfficeWork.timeOfArrivalMinutesName}
                  value={mainOfficeWork.timeOfArrivalMinutesValue}
                  onChange={onChangeTime('mainOfficeWork', index, 'timeOfArrival', 'minutes')}
                  onBlur={onCheckState}
                />
                <InputTypeHidden
                  name={mainOfficeWork.timeOfArrivalCalcName}
                  value={mainOfficeWork.timeOfArrivalCalcValue}
                />
              </Td>
              <Td>
                <TwoDigitsInput
                  name={mainOfficeWork.leaveTimeHoursName}
                  value={mainOfficeWork.leaveTimeHoursValue}
                  onChange={onChangeTime('mainOfficeWork', index, 'leaveTime', 'hours')}
                  onBlur={onCheckState}
                />
                ：
                <TwoDigitsInput
                  name={mainOfficeWork.leaveTimeMinutesName}
                  value={mainOfficeWork.leaveTimeMinutesValue}
                  onChange={onChangeTime('mainOfficeWork', index, 'leaveTime', 'minutes')}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={mainOfficeWork.leaveTimeCalcName} value={mainOfficeWork.leaveTimeCalcValue} />
              </Td>
              <Td>
                <TwoDigitsInput
                  name={mainOfficeWork.breakTimeHoursName}
                  value={mainOfficeWork.breakTimeHoursValue}
                  onChange={onChangeTime('mainOfficeWork', index, 'breakTime', 'hours')}
                  onBlur={onCheckState}
                />
                ：
                <TwoDigitsInput
                  name={mainOfficeWork.breakTimeMinutesName}
                  value={mainOfficeWork.breakTimeMinutesValue}
                  onChange={onChangeTime('mainOfficeWork', index, 'breakTime', 'minutes')}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={mainOfficeWork.breakTimeCalcName} value={mainOfficeWork.breakTimeCalcValue} />
              </Td>
              {/*中抜け*/}
              <Td>
                <TwoDigitsInput
                  name={hollow.goingOutTimeHoursName}
                  value={hollow.goingOutTimeHoursValue}
                  onChange={onHollowChangeTime(index, 'goingOutTime', 'hours')}
                  onBlur={onCheckState}
                />
                ：
                <TwoDigitsInput
                  name={hollow.goingOutTimeMinutesName}
                  value={hollow.goingOutTimeMinutesValue}
                  onChange={onHollowChangeTime(index, 'goingOutTime', 'minutes')}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={hollow.goingOutTimeCalcName} value={hollow.goingOutTimeCalcValue} />
              </Td>
              <Td>
                <TwoDigitsInput
                  name={hollow.returnTimeHoursName}
                  value={hollow.returnTimeHoursValue}
                  onChange={onHollowChangeTime(index, 'returnTime', 'hours')}
                  onBlur={onCheckState}
                />
                ：
                <TwoDigitsInput
                  name={hollow.returnTimeMinutesName}
                  value={hollow.returnTimeMinutesValue}
                  onChange={onHollowChangeTime(index, 'returnTime', 'minutes')}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={hollow.returnTimeCalcName} value={hollow.returnTimeCalcValue} />
                <InputTypeHidden name={hollow.returnTimeErrorName} value={hollow.returnTimeErrorValue} />
              </Td>
              {/*内訳*/}
              <Td>
                <div>{breakdown.customerWorkTimeText}</div>
                <InputTypeHidden name={breakdown.customerWorkTimeName} value={breakdown.customerWorkTimeValue} />
              </Td>
              <Td>
                <div>{breakdown.mainOfficeWorkTimeText}</div>
                <InputTypeHidden name={breakdown.mainOfficeWorkTimeName} value={breakdown.mainOfficeWorkTimeValue} />
              </Td>
              {/*合計*/}
              <Td>
                <div>{total.text}</div>
                <InputTypeHidden name={total.startName} value={total.startValue} />
                <InputTypeHidden name={total.endName} value={total.endValue} />
              </Td>
              {/*残業/ 休出*/}
              <Td>
                <div>{overTime.text}</div>
              </Td>
              {/*種別*/}
              <Td>
                <select name={kinds.selectedName} value={kinds.selectedValue}>
                  {kindsOptions.map(({ text, value }) => {
                    return (
                      <option key={`${text}-${value}`} value={value}>
                        {text}
                      </option>
                    )
                  })}
                </select>
                <InputTypeHidden name={kinds.kindTypeErrorName} value={kinds.kindTypeErrorValue} />
                <InputTypeHidden name={kinds.paidTimeName} value={kinds.paidTimeValue} />
              </Td>
              {/*事由*/}
              <Td>
                <select name={reason.selectedName} value={reason.selectedValue}>
                  {reasonOptions.map(({ text, value }) => {
                    return (
                      <option key={`${text}-${value}`} value={value}>
                        {text}
                      </option>
                    )
                  })}
                </select>
                <InputTypeHidden name={reason.combinationErrorName} value={reason.combinationErrorValue} />
              </Td>
              <Td style={{ display: 'none' }}>
                <select name={absenceContact.selectedName} value={absenceContact.selectedValue}>
                  <option value="0"> - -</option>
                  <option value="1">未連絡</option>
                  <option value="2">現場済</option>
                  <option value="3">自社済</option>
                  <option value="4">連絡済</option>
                </select>
                <input
                  type="hidden"
                  name={absenceContact.combinationErrorName}
                  value={absenceContact.combinationErrorValue}
                />
              </Td>
              {/*勤務形態*/}
              <Td>
                <select name={workStyle.selectedName} value={workStyle.selectedValue}>
                  <option value="0"> - -</option>
                  <option value="1">出社</option>
                  <option value="2">在宅</option>
                  <option value="3">出社/在宅</option>
                </select>
                <InputTypeHidden name={workStyle.workTypeErrorName} value={workStyle.workTypeErrorValue} />
              </Td>
              {/*備考*/}
              <Td>
                <input name={remarks.remarksName} value={remarks.remarksValue} />
                <InputTypeHidden name={remarks.combinationErrorName} value={remarks.combinationErrorValue} />
              </Td>
            </Tr>
          )
        }
      )}
    </tbody>
  )
}
