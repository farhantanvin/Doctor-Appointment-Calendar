import { AppointDetailContainer } from "../styledComponent/StyledComponent";

export default function DetailSpan({ value, children }) {
  return (
    <AppointDetailContainer>
      <div>
        <span>{children}</span>
      </div>
      <div>
        <span>{value}</span>
      </div>
    </AppointDetailContainer>
  );
}
