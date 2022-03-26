import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { monthOptions, yearOptions } from "../constant/Constant";
import {
  AppointmentButton,
  CalenderHeaderContainer,
  DropdownContainer,
} from "../styledComponent/StyledComponent";

export default function Header({
  onYearSelect,
  onMonthSelect,
  openModal,
  defaultYear,
  defaultMonth,
}) {
  return (
    <CalenderHeaderContainer>
      <DropdownContainer>
        <Dropdown
          options={monthOptions}
          onChange={onMonthSelect}
          value={defaultMonth}
        />

        <Dropdown
          options={yearOptions}
          onChange={onYearSelect}
          value={defaultYear}
        />
      </DropdownContainer>
      <AppointmentButton onClick={openModal}>
        Create Appointment
      </AppointmentButton>
    </CalenderHeaderContainer>
  );
}
