$(document).ready(() => {
  console.log("running");
  //set color up
  const allRows = document.querySelectorAll(".row");
  const currentHour = moment().hour();

  allRows.forEach((row) => {
    const hour = parseInt(row.dataset.hour);

    console.log(row.dataset.hour);

    if (currentHour > hour) {
      row.classList.add("past");
    } else if (currentHour === hour) {
      row.classList.add("present");
    } else if (currentHour < hour) {
      row.classList.add("future");
    }
  });

document.querySelector("#currentDay").textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
});

// function handleSubmit(event) {
//   event.preventDefault();

//   const data = new FormData(event.target);

//   const value = data.get('row');

//   console.log({ value });
// }

// const form = document.querySelector('form');
