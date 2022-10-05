const axios = require("axios");
let city;
// const city = require("../routes/weatherRoute");
module.exports = (req, res, next) => {
  //   res.render("index");
  //   const city = req.body.city;
  city = req.query.city;
  console.log(req.query);
  console.log(city);
  const params = {
    access_key: "113582164e8a6873ca56cbba32c571ee",
    query: city,
  };

  axios
    .get("http://api.weatherstack.com/forecast", { params })
    .then((response) => {
      const apiResponse = response.data;
      console.log(apiResponse.forecast);
      res.send({
        city: apiResponse.location.name,
        state: apiResponse.location.region,
        country: apiResponse.location.country,
        description: apiResponse.current.weather_descriptions[0],
        weather_icon: apiResponse.current.weather_icons[0],
        temperature: apiResponse.current.temperature,
        humidity: apiResponse.current.humidity,
        weather: `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`,
        forecast: apiResponse.forecast,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.send({
        error: error,
      });
    });
};
