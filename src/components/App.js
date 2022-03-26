import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calender";

function App() {
  return (
    <>
      <Routes>
        <Route path="/year/:year/month/:month" element={<Calendar />} />
        <Route path="/" element={<Calendar />} />
      </Routes>
    </>
  );
}

export default App;
