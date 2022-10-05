console.log("Hello World");
const weather1 = document.getElementById("1");
const weather2 = document.getElementById("2");
const weather3 = document.getElementById("3");
const weather4 = document.getElementById("4");
const weather5 = document.getElementById("5");
const weather6 = document.getElementById("6");
const weather7 = document.getElementById("7");
const data1 = document.getElementById("d1");
const data2 = document.getElementById("d2");
const data3 = document.getElementById("d3");
const data4 = document.getElementById("d4");
const data5 = document.getElementById("d5");
const data6 = document.getElementById("d6");
const data7 = document.getElementById("d7");
const immmg = document.getElementById("image");
// weather1.textContent = "Hello World";
const input = document.querySelector("input");
// console.log(input);
const weather = document.getElementById("el");
console.log(weather);
const form = document.querySelector("form");

form.addEventListener("submit", (el) => {
  el.preventDefault();
  const city = input.value;
  fetch(
    `http://api.weatherstack.com/current?access_key=113582164e8a6873ca56cbba32c571ee&query=${city}`,
    {
      referrerPolicy: "unsafe-url",
    }
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((apiResponse) => {
      console.log(apiResponse);
      weather.classList.remove("op");
      immmg.src = apiResponse.current.weather_icons[0];
      weather1.textContent = "City: ";
      data1.textContent = apiResponse.location.name;
      weather2.textContent = "State: ";
      data2.textContent = apiResponse.location.region;
      weather3.textContent = "Country: ";
      data3.textContent = apiResponse.location.country;
      weather4.textContent = "Description: ";
      data4.textContent = apiResponse.current.weather_descriptions[0];
      weather5.textContent = "Temperature:  ";
      data5.textContent = apiResponse.current.temperature;
      weather6.textContent = "Humidity: ";
      data6.textContent = apiResponse.current.humidity;
    });
});
