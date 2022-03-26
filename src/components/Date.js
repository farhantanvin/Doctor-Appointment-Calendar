import _ from "lodash";
import { connect } from "react-redux";
import {
  DateApointmentContainer,
  DateContainer,
  DateDataContainer,
} from "../styledComponent/StyledComponent";
import Appointment from "./Appointment";

function Date(props) {
  const appointment = _.orderBy(props.userData, ["time"], ["asc"]).map(
    (data, index) => (
      <Appointment
        key={index}
        name={data.data.name}
        age={data.data.age}
        gender={data.data.gender}
        time={data.data.time}
      />
    )
  );

  return (
    <DateDataContainer key={props.key}>
      <DateContainer>{props.date}</DateContainer>
      <DateApointmentContainer>{appointment}</DateApointmentContainer>
    </DateDataContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  let month = ownProps.month < 10 ? "0" + ownProps.month : ownProps.month;
  let date = ownProps.date < 10 ? "0" + ownProps.date : ownProps.date;
  let dateAppointment = ownProps.year + "-" + month + "-" + date;

  var userData = state.appointment.filter(
    (data) => data.date === dateAppointment
  );
  return {
    userData: userData,
  };
};

export default connect(mapStateToProps)(Date);
