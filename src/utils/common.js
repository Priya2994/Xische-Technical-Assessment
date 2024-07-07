export function formatDate(inputDate) {
  var parts = inputDate.split("-");
  var year = parts[0];
  var month = parts[1];
  var day = parts[2];

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var monthName = months[parseInt(month) - 1];
  return day + " " + monthName + " " + year;
}
