import React, { useCallback, useState } from "react";
import { AppointmentContainer } from "../styledComponent/StyledComponent";
import AppointmentDetailModal from "./AppointmentDetailModal";

export default function Appointment({ name, gender, time, age }) {
  const [appointmentDetailModalState, setAppointmentDetailModalState] =
    useState(false);

  const openAppointDetailModal = useCallback(() => {
    setAppointmentDetailModalState(!appointmentDetailModalState);
  }, [appointmentDetailModalState]);
  return (
    <>
      <AppointmentContainer onClick={openAppointDetailModal}>
        <strong>[Name]:</strong>
        {name} <strong>[Time]:</strong>
        {time}
      </AppointmentContainer>
      <AppointmentDetailModal
        appointmentDetailModalState={appointmentDetailModalState}
        openAppointDetailModal={openAppointDetailModal}
        name={name}
        age={age}
        gender={gender}
        time={time}
      />
    </>
  );
}
