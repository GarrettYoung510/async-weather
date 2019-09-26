// FREE - limit 50 requests a day
// AccuWeather API
const key = 'FhN4dTJ0i0jYVqMgrIT6ApoAxmY4kStX';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}

getCity('maui')
.then(data => console.log(data))
.catch(err => console.log(err));