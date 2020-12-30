// This script handles all the code required for updating the ui and with the json we get by making an api request.

// const form = document.querySelector('form');

const form = document.forms.citySearch;
const card = document.querySelector('.card');
const image = document.querySelector('.image');
const icon = document.querySelector('img');
const cityName = document.querySelector('.city-name');
const weatherCondition = document.querySelector('.weather-condition');
const temperature = document.querySelector('.temperature > span');
const errorMessage = document.querySelector('.message');

const updateCity = async function(cityName) {
    const cityInfo = await getCity(cityName);
    const weather = await getWeather(cityInfo.Key);

    return {
        isDayTime: weather.IsDayTime,
        iconNumber: weather.WeatherIcon,
        cityName: cityInfo.EnglishName,
        weatherCondition: weather.WeatherText,
        temperature: weather.Temperature.Metric.Value
    };
};

const updateUI = function(details) {
    // if (details.isDayTime) {
    //     image.style.backgroundImage = "url('img/day.svg')";
    // } else {
    //     image.style.backgroundImage = "url('img/night.svg')";
    // }

    // Ternary operator
    image.style.backgroundImage = details.isDayTime ? "url('img/day.svg')" : "url('img/night.svg')";

    icon.setAttribute('src', `img/icons/${details.iconNumber}.svg`);

    cityName.textContent = details.cityName;
    weatherCondition.textContent = details.weatherCondition;
    temperature.textContent = details.temperature;
};

form.addEventListener('submit', event => {
    event.preventDefault();

    card.style.display = 'none';
    errorMessage.style.display = 'none';

    const cityName = form.city.value.trim();
    
    updateCity(cityName)
        .then(details => {
            updateUI(details)
            card.style.display = 'block';
        })
        .catch(() => {
            errorMessage.style.display = 'block';
        });

    form.reset();
});