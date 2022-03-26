import moment from "moment";

export default function useDate(weekArray, selectedYear, selectedMonth) {
  const startOfDay = moment()
    .year(selectedYear)
    .month(selectedMonth)
    .startOf("month")
    .format("ddd");

  const monthSize = parseInt(
    moment().year(selectedYear).month(selectedMonth).endOf("month").format("DD")
  );

  const startIndex = weekArray.indexOf(startOfDay);

  const endIndex = startIndex + monthSize;

  return {
    startOfDay,
    monthSize,
    startIndex,
    endIndex,
  };
}
