import Modal from "react-modal";
import {
  customStyles,
  ModalBody,
  ModalClose,
  ModalFooter,
  ModalHeader,
} from "../styledComponent/StyledComponent";
import DetailSpan from "./DetailSpan";
export default function AppointmentDetailModal({
  appointmentDetailModalState,
  openAppointDetailModal,
  name,
  age,
  gender,
  time,
}) {
  return (
    <Modal
      isOpen={appointmentDetailModalState}
      ariaHideApp={false}
      onRequestClose={openAppointDetailModal}
      style={customStyles}
      contentLabel="Appointment Detail Modal"
    >
      <ModalHeader>Appointment Detail</ModalHeader>

      <ModalBody>
        <DetailSpan value={name}>Name:</DetailSpan>
        <DetailSpan value={gender}>Gender:</DetailSpan>
        <DetailSpan value={age}>Age:</DetailSpan>
        <DetailSpan value={time}>Time:</DetailSpan>
      </ModalBody>
      <ModalFooter>
        <ModalClose onClick={openAppointDetailModal}>Close</ModalClose>
      </ModalFooter>
    </Modal>
  );
}
