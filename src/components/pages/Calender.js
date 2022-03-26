import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { gridArray, weekArray } from "../../constant/Constant";
import useDate from "../../hooks/useDate";
import * as actionCreators from "../../redux/actions/index";
import {
  CalendarContainer,
  CalendarContainerBody,
  CalenderDateContainer,
  CalenderDateDayContainerActive,
  CalenderDateDayContainerDisable,
  CalenderWeekContainer,
  CalenderWeekDayContainer,
} from "../../styledComponent/StyledComponent";
import AppointmentModal from "../AppointmentModal";
import Date from "../Date";
import Header from "../Header";

export default function Calendar() {
  /* Router dom to slect calender  */
  const { year, month } = useParams();
  const [selectedYear, setSelectedYear] = useState(2022);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();
  const { addAppointment } = bindActionCreators(actionCreators, dispatch);

  const { monthSize, startIndex, endIndex } = useDate(
    weekArray,
    selectedYear,
    selectedMonth
  );

  useEffect(() => {
    const defaultYear = year || moment().format("YYYY");
    const defaultMonth = month || moment().format("MM");

    setSelectedYear(parseInt(defaultYear));
    setSelectedMonth(parseInt(defaultMonth) - 1);
  }, [year, month]);

  const onYearSelect = (year) => {
    const { value } = year;
    setSelectedYear(parseInt(value));
  };

  const onMonthSelect = (month) => {
    const { value } = month;
    setSelectedMonth(parseInt(value - 1));
  };

  const openModal = useCallback(() => {
    setModalState(!modalState);
  }, [modalState]);

  const onModalSubmit = (data) => {
    const date = data.date;
    const dataByDate = {
      date,
      time: data.time,
      data: data,
    };
    addAppointment(dataByDate);
  };
  return (
    <>
      <CalendarContainer>
        <Header
          onYearSelect={onYearSelect}
          onMonthSelect={onMonthSelect}
          defaultYear={selectedYear.toString()}
          defaultMonth={(selectedMonth + 1).toString()}
          openModal={openModal}
        />
        <CalendarContainerBody>
          <CalenderWeekContainer>
            {weekArray.map((data, i) => (
              <CalenderWeekDayContainer key={i}>
                {data}
              </CalenderWeekDayContainer>
            ))}
          </CalenderWeekContainer>
          <CalenderDateContainer>
            {gridArray.map((data, i) =>
              i >= startIndex && i < endIndex ? (
                <CalenderDateDayContainerActive key={i}>
                  <Date
                    date={i - startIndex + 1}
                    month={selectedMonth + 1}
                    year={selectedYear}
                  />
                </CalenderDateDayContainerActive>
              ) : (
                <CalenderDateDayContainerDisable
                  key={i}
                ></CalenderDateDayContainerDisable>
              )
            )}
          </CalenderDateContainer>
        </CalendarContainerBody>
      </CalendarContainer>

      <AppointmentModal
        modalState={modalState}
        openModal={openModal}
        onModalSubmit={onModalSubmit}
        monthSize={monthSize}
      />
    </>
  );
}
