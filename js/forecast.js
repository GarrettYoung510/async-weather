// used for api manipulation
// FREE - limit 50 requests a day
// AccuWeather API
const key = "IL0UncemSD2sDHJUo6hhT1ZW7YV94eN6";

// get weather info
const getWeather = async id => {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

//   console.log(data);
  return data[0];
};

// get city info
const getCity = async city => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

//   console.log(data);
  return data[0];
};

// // testing get 10 days
// const get10Days = async id => {
//   const base = "http://dataservice.accuweather.com/forecasts/v1/daily/10day/";
//   const query = `${id}?apikey=${key}`;

//   const response = await fetch(base + query);
//   const data = await response.json();

//   console.log(data);
// };


// getCity('alameda')
// .then(data => getWeather(data.Key)).then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err));

// getWeather("332018");
// get10Days("332018");
