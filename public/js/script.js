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
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=c445762544df62f5dc5ccf510d289aea"
  )
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((apiResponse) => {
      console.log(apiResponse);
      weather.classList.remove("op");
      let img = apiResponse.weather[0].icon;

      immmg.src = `http://openweathermap.org/img/wn/${img}.png`;
      weather1.textContent = "City: ";
      data1.textContent = apiResponse.name;
      weather2.textContent = "Country: ";
      data2.textContent = apiResponse.sys.country;
      weather3.textContent = "Description: ";
      data3.textContent = apiResponse.weather[0].description;
      console.log(apiResponse.weather[0]);
      weather4.textContent = "Minimum Temperature:  ";
      data4.textContent = apiResponse.main.temp_min;
      weather5.textContent = "Maximum Temperature: ";
      data5.textContent = apiResponse.main.temp_max;
      weather6.textContent = "Humidity: ";
      data6.textContent = apiResponse.main.humidity;
    });
});
