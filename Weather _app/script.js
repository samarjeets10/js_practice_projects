
// DOM elements //

const inputSearch = document.getElementById('inputSearch');
const city = document.getElementById('city');
const temprature = document.getElementById('temperature');
const description = document.querySelector('.description');
const cloud = document.getElementById('cloud');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
let form = document.querySelector('.form');
const popUp = document.querySelector('.popUp');

// event listeners //

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(inputSearch.value != '') {
        searchWeather();
    } else {
        ErrorWindow();
    }
});


// API id and url //

let key = '55b585caf3115e4c8829bc9469651c8f';
let url = 'https://api.openweathermap.org/data/2.5/weather';


// Search weather function //

const searchWeather = async() => {

    let newUrl = `${url}?q=${inputSearch.value}&appid=${key}&units=metric`;

    try {
        let response = await fetch(newUrl);
        let data = await response.json();

        console.log(data);

        if (data.cod === 200) {

            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src = `https:flagsapi.com/${data.sys.country}/flat/64.png`;
            temprature.querySelector('span').innerText = data.main.temp;
            temprature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            pressure.innerText = data.main.pressure;
            cloud.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            description.innerText = data.weather[0].description;
        } else {
            ErrorWindow();
        }

        setTimeout(() => {
            inputSearch.value = '';
        }, 3000);

    } catch (error) {
        ErrorWindow();
    }
};


// error window pop-up 

function ErrorWindow() {

    popUp.style.display = 'flex';

    setTimeout(() => {
        popUp.style.display = 'none';
    }, 3000);
};



