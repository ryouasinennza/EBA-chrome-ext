import { VFC } from 'react'
import { BodyData } from '../../../hooks'
import { InputTypeHidden, Td, Tr, TwoDigitsInput, Coron } from '../../../common'
import { kindsOptions, reasonOptions } from './constant'

export type TableBodyProps = {
  onChangeTime: (e) => void
  onHollowChangeTime: (e) => void
  onCheckState: () => void
  onChangeSelector: (e) => void
  onChangeText: (e) => void
  bodyData: BodyData
  displayMode: {
    customerWork: boolean
    mainOfficeWork: boolean
    hollow: boolean
  }
}

export const TableBody: VFC<TableBodyProps> = ({
  bodyData,
  onChangeTime,
  onHollowChangeTime,
  onCheckState,
  onChangeSelector,
  onChangeText,
  displayMode,
}) => {
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
            <Tr key={`${days.text}-${index}`} BGColor={error ? 'error' : days.dayType}>
              {/*日付*/}
              <Td>
                {days.text}
                <InputTypeHidden value={days.value} name={days.name} />
              </Td>
              {/*客先*/}
              <Td isDisplayNone={!displayMode.customerWork}>
                <TwoDigitsInput
                  name={customerWork.timeOfArrivalHoursName}
                  value={customerWork.timeOfArrivalHoursValue}
                  data-prop-name="customerWork"
                  data-target-index={index}
                  data-time-type="timeOfArrival"
                  data-input-type="hours"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <Coron />
                <TwoDigitsInput
                  name={customerWork.timeOfArrivalMinutesName}
                  value={customerWork.timeOfArrivalMinutesValue}
                  data-prop-name="customerWork"
                  data-target-index={index}
                  data-time-type="timeOfArrival"
                  data-input-type="minutes"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <InputTypeHidden
                  name={customerWork.timeOfArrivalCalcName}
                  value={customerWork.timeOfArrivalCalcValue}
                />
              </Td>
              <Td isDisplayNone={!displayMode.customerWork}>
                <TwoDigitsInput
                  name={customerWork.leaveTimeHoursName}
                  value={customerWork.leaveTimeHoursValue}
                  data-prop-name="customerWork"
                  data-target-index={index}
                  data-time-type="leaveTime"
                  data-input-type="hours"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <Coron />
                <TwoDigitsInput
                  name={customerWork.leaveTimeMinutesName}
                  value={customerWork.leaveTimeMinutesValue}
                  data-prop-name="customerWork"
                  data-target-index={index}
                  data-time-type="leaveTime"
                  data-input-type="minutes"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={customerWork.leaveTimeCalcName} value={customerWork.leaveTimeCalcValue} />
              </Td>
              <Td isDisplayNone={!displayMode.customerWork}>
                <TwoDigitsInput
                  name={customerWork.breakTimeHoursName}
                  value={customerWork.breakTimeHoursValue}
                  data-prop-name="customerWork"
                  data-target-index={index}
                  data-time-type="breakTime"
                  data-input-type="hours"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <Coron />
                <TwoDigitsInput
                  name={customerWork.breakTimeMinutesName}
                  value={customerWork.breakTimeMinutesValue}
                  data-prop-name="customerWork"
                  data-target-index={index}
                  data-time-type="breakTime"
                  data-input-type="minutes"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={customerWork.breakTimeCalcName} value={customerWork.breakTimeCalcValue} />
              </Td>
              {/*本社*/}
              <Td isDisplayNone={!displayMode.mainOfficeWork}>
                <TwoDigitsInput
                  name={mainOfficeWork.timeOfArrivalHoursName}
                  value={mainOfficeWork.timeOfArrivalHoursValue}
                  data-prop-name="mainOfficeWork"
                  data-target-index={index}
                  data-time-type="timeOfArrival"
                  data-input-type="hours"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <Coron />
                <TwoDigitsInput
                  name={mainOfficeWork.timeOfArrivalMinutesName}
                  value={mainOfficeWork.timeOfArrivalMinutesValue}
                  data-prop-name="mainOfficeWork"
                  data-target-index={index}
                  data-time-type="timeOfArrival"
                  data-input-type="minutes"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <InputTypeHidden
                  name={mainOfficeWork.timeOfArrivalCalcName}
                  value={mainOfficeWork.timeOfArrivalCalcValue}
                />
              </Td>
              <Td isDisplayNone={!displayMode.mainOfficeWork}>
                <TwoDigitsInput
                  name={mainOfficeWork.leaveTimeHoursName}
                  value={mainOfficeWork.leaveTimeHoursValue}
                  data-prop-name="mainOfficeWork"
                  data-target-index={index}
                  data-time-type="leaveTime"
                  data-input-type="hours"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <Coron />
                <TwoDigitsInput
                  name={mainOfficeWork.leaveTimeMinutesName}
                  value={mainOfficeWork.leaveTimeMinutesValue}
                  data-prop-name="mainOfficeWork"
                  data-target-index={index}
                  data-time-type="leaveTime"
                  data-input-type="minutes"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={mainOfficeWork.leaveTimeCalcName} value={mainOfficeWork.leaveTimeCalcValue} />
              </Td>
              <Td isDisplayNone={!displayMode.mainOfficeWork}>
                <TwoDigitsInput
                  name={mainOfficeWork.breakTimeHoursName}
                  value={mainOfficeWork.breakTimeHoursValue}
                  data-prop-name="mainOfficeWork"
                  data-target-index={index}
                  data-time-type="breakTime"
                  data-input-type="hours"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <Coron />
                <TwoDigitsInput
                  name={mainOfficeWork.breakTimeMinutesName}
                  value={mainOfficeWork.breakTimeMinutesValue}
                  data-prop-name="mainOfficeWork"
                  data-target-index={index}
                  data-time-type="breakTime"
                  data-input-type="minutes"
                  onChange={onChangeTime}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={mainOfficeWork.breakTimeCalcName} value={mainOfficeWork.breakTimeCalcValue} />
              </Td>
              {/*中抜け*/}
              <Td isDisplayNone={!displayMode.hollow}>
                <TwoDigitsInput
                  name={hollow.goingOutTimeHoursName}
                  value={hollow.goingOutTimeHoursValue}
                  data-target-index={index}
                  data-time-type="goingOutTime"
                  data-input-type="hours"
                  onChange={onHollowChangeTime}
                  onBlur={onCheckState}
                />
                <Coron />
                <TwoDigitsInput
                  name={hollow.goingOutTimeMinutesName}
                  value={hollow.goingOutTimeMinutesValue}
                  data-target-index={index}
                  data-time-type="goingOutTime"
                  data-input-type="minutes"
                  onChange={onHollowChangeTime}
                  onBlur={onCheckState}
                />
                <InputTypeHidden name={hollow.goingOutTimeCalcName} value={hollow.goingOutTimeCalcValue} />
              </Td>
              <Td isDisplayNone={!displayMode.hollow}>
                <TwoDigitsInput
                  name={hollow.returnTimeHoursName}
                  value={hollow.returnTimeHoursValue}
                  data-target-index={index}
                  data-time-type="returnTime"
                  data-input-type="hours"
                  onChange={onHollowChangeTime}
                  onBlur={onCheckState}
                />
                <Coron />
                <TwoDigitsInput
                  name={hollow.returnTimeMinutesName}
                  value={hollow.returnTimeMinutesValue}
                  data-target-index={index}
                  data-time-type="returnTime"
                  data-input-type="minutes"
                  onChange={onHollowChangeTime}
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
                <select
                  name={kinds.selectedName}
                  value={kinds.selectedValue}
                  data-target-index={index}
                  data-selector-type="kinds"
                  onChange={onChangeSelector}
                  onBlur={onCheckState}
                >
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
                <select
                  name={reason.selectedName}
                  value={reason.selectedValue}
                  data-target-index={index}
                  data-selector-type="reason"
                  onChange={onChangeSelector}
                  onBlur={onCheckState}
                >
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
                <select
                  name={workStyle.selectedName}
                  value={workStyle.selectedValue}
                  data-target-index={index}
                  data-selector-type="workStyle"
                  onChange={onChangeSelector}
                  onBlur={onCheckState}
                >
                  <option value="0"> - -</option>
                  <option value="1">出社</option>
                  <option value="2">在宅</option>
                  <option value="3">出社/在宅</option>
                </select>
                <InputTypeHidden name={workStyle.workTypeErrorName} value={workStyle.workTypeErrorValue} />
              </Td>
              {/*備考*/}
              <Td>
                <input
                  name={remarks.remarksName}
                  value={remarks.remarksValue}
                  data-target-index={index}
                  onChange={onChangeText}
                />
                <InputTypeHidden name={remarks.combinationErrorName} value={remarks.combinationErrorValue} />
              </Td>
            </Tr>
          )
        }
      )}
    </tbody>
  )
}
