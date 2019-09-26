// used for api manipulation
// FREE - limit 50 requests a day
// AccuWeather API
const key = 'FhN4dTJ0i0jYVqMgrIT6ApoAxmY4kStX';

// get weather info
const getWeather = async (id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}


// get city info
const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}

// getCity('alameda')
// .then(data => getWeather(data.Key)).then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err));

// getWeather("332018");