"use strict";

let tableBody = document.getElementById("weatherTable-body"); //attached to my HTML table body

let daysWeather = [
  //an array containing the data needed for the table
  {
    day: "Sunday",
    temperature: 60,
    rainfall: 0.2,
  },
  {
    day: "Monday",
    temperature: 55,
    rainfall: 0,
  },
  {
    day: "Tuesday",
    temperature: 63,
    rainfall: 0.3,
  },
  {
    day: "Wednesday",
    temperature: 57,
    rainfall: 0.25,
  },
];

for (let i = 0; i < daysWeather.length; i++) {
  //for loop. Place functions inside loop. Review notes
  let tr = document.createElement("tr"); // one row for each column of information
  let dayTd = document.createElement("td"); //creating data for day in row
  let temperatureTd = document.createElement("td"); //creating data for temperature in row
  let rainfallTd = document.createElement("td"); //creating data for rainfall in row
  dayTd.innerText = daysWeather[i].day; //I believe this added the data information from the array above to HTML(same for the two below)
  temperatureTd.innerText = daysWeather[i].temperature;
  rainfallTd.innerText = daysWeather[i].rainfall;
  tr.appendChild(dayTd); //remember appendchild puts the child element (dayTd) inside the parent. so this is a child of row
  tr.appendChild(temperatureTd);
  tr.appendChild(rainfallTd);
  tableBody.appendChild(tr);
}

// totalTemperature adds us the temp for each day
let totalTemperature = daysWeather.reduce((acc, curr) => {
  return acc + curr.temperature; // I believe this gathers the temps
}, 0);

let averageTemperature = totalTemperature / daysWeather.length; //this calculates the average but how to output it?
let avgTempbutton = document.getElementById("avgTemp");

avgTempbutton.addEventListener("click", function (event) {
  //using click because I have a button (was using submit but now I know that's for a form)
  // event.preventDefault (); //note: so I have to put event in the parameter "()" to be able to prevent reloading.  That's why it was crossed out. Don't really need, it's usually for a form.
  let p = document.getElementById("resultsavgTemp");
  p.innerText = averageTemperature; //added to allow the variable to display on HTML
});

let maxRainfall = Math.max(...daysWeather.map(day => day.rainfall));
 //note: Math.max allows me to create a new array (list) by taking the property (data "rainfall") from each object (the object is day).  The "..." is called a spread operator. it breaks down the array making it possible to find the highest number.  I WONDER IF THERE'S A SIMPLER WAY (one that we already learned possibly)

let maxRainbutton = document.getElementById("maxRain");
maxRainbutton.addEventListener("click", function () {
  let p = document.getElementById("resultsmaxRain");
  p.innerText = maxRainfall;
});
//UGH...how do I display?!?! Just keep researching Shantel! You've got this!
