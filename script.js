const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const getToday = new Date();

console.log(getToday.getMonth());

getDay(getToday.getDay());
getMonth(getToday.getMonth());
date.innerHTML = `${getToday.getDate()}`;
year.innerHTML = `${getToday.getFullYear()}`;

function getDay(x) {
  switch (x) {
    case 0:
      day.innerHTML = "Sunday";
      break;
    case 1:
      day.innerHTML = "Monday";
      break;
    case 2:
      day.innerHTML = "Tuesday";
      break;
    case 3:
      day.innerHTML = "Wednesday";
      break;
    case 4:
      day.innerHTML = "Thursday";
      break;
    case 5:
      day.innerHTML = "Friday";
      break;
    case 6:
      day.innerHTML = "Saturday";
      break;
  }
}
function getMonth(x) {
  switch (x) {
    case 0:
      month.innerHTML = "January";
      break;
    case 1:
      month.innerHTML = "February";
      break;
    case 2:
      month.innerHTML = "March";
      break;
    case 3:
      month.innerHTML = "April";
      break;
    case 4:
      month.innerHTML = "May";
      break;
    case 5:
      month.innerHTML = "June";
      break;
    case 6:
      month.innerHTML = "July";
      break;
    case 7:
      month.innerHTML = "August";
      break;
    case 8:
      month.innerHTML = "September";
      break;
    case 9:
      month.innerHTML = "October";
      break;
    case 10:
      month.innerHTML = "November";
      break;
    case 11:
      month.innerHTML = "December";
      break;
  }
}
