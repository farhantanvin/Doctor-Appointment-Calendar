import { useForm } from "react-hook-form";
import Modal from "react-modal";
import {
  customStyles,
  ErrorText,
  InputField,
  ModalBody,
  ModalClose,
  ModalFooter,
  ModalHeader,
  ModalSubmit,
} from "../styledComponent/StyledComponent";
import TextInput from "./TextInput";

export default function AppointmentModal({
  onModalSubmit,
  modalState,
  openModal,
  monthSize,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.date);
    if (data.name && data.date && data.time) {
      onModalSubmit(data);
      reset();
      openModal();
    }
  };

  const closeModal = () => {
    openModal();
    clearErrors();
  };

  return (
    <Modal
      isOpen={modalState}
      ariaHideApp={false}
      onRequestClose={openModal}
      style={customStyles}
      contentLabel="Appointment Modal"
    >
      <ModalHeader>Create Appointment</ModalHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <TextInput inputFeildName="Name:">
            <InputField {...register("name", { required: true })}></InputField>
          </TextInput>
          {errors.name && <ErrorText>Name is required</ErrorText>}

          <TextInput inputFeildName="Gender:">
            <InputField
              {...register("gender", { required: true })}
            ></InputField>
          </TextInput>
          {errors.gender && <ErrorText>Gender is required</ErrorText>}

          <TextInput inputFeildName="Age:">
            <InputField {...register("age", { required: true })}></InputField>
          </TextInput>
          {errors.age && <ErrorText>Age is required</ErrorText>}

          <TextInput inputFeildName="Date:">
            <InputField
              {...register("date", { required: true })}
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              placeholder="Type Date Number"
            ></InputField>
          </TextInput>
          {errors.date && <ErrorText>Date is required</ErrorText>}

          <TextInput inputFeildName="Time">
            <InputField
              {...register("time", { required: true })}
              type="time"
              min="1"
              max="12"
            ></InputField>
          </TextInput>
          {errors.time && <ErrorText>Time is required</ErrorText>}
        </ModalBody>

        <ModalFooter>
          <ModalSubmit>Submit</ModalSubmit>
          <ModalClose type="button" onClick={closeModal}>
            Cancel
          </ModalClose>
        </ModalFooter>
      </form>
    </Modal>
  );
}
