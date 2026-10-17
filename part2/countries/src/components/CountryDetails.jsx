import { useState, useEffect } from 'react'

import weatherService from '../services/weather'

const CountryDetails = ({ country }) => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        weatherService
            .getCurrentWeather(country.capital)
            .then((weather) => setWeather(weather))
            .catch(() => {
                /* Empty */
            })
    }, [])

    return (
        <>
            <h1>{country.name.common}</h1>

            <p>Capital {country.capital}</p>

            <p>Area {country.area}</p>

            <h2>Languages</h2>

            <ul>
                {Object.values(country.languages).map((language) => (
                    <li
                        key={language}
                    >
                        {language}
                    </li>
                ))}
            </ul>

            <img 
                alt={country.flags.alt}
                src={country.flags.png}
            />

            <h2>{`Weather in ${country.capital}`}</h2>

            <p>{`Temperature ${weather?.main?.temp} Celsius`}</p>

            <img
                alt={'weather icon'}
                src={`https://openweathermap.org/payload/api/media/file/${weather?.weather?.at(0)?.icon}.png`}
            />

            <p>{`Wind ${weather?.wind?.speed} m/s`}</p>
        </>
    )
}

export default CountryDetails
