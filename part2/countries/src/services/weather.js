import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

const API_KEY = import.meta.env.VITE_WEATHER_KEY

const getCurrentWeather = (city) => {
    if (!API_KEY) {
        throw new Error('can`t get current weather, key is upsent')
    }

    return axios
        .get(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`)
        .then((response) => response.data)
}

export default {
    getCurrentWeather,
}
