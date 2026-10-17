import CountryDetails from "./CountryDetails"

const CountryList = ({ countries, selectedCountry, setSelectedCountry }) => {
    if (!countries.length) {
        return (
            <p>No available countries</p>
        )
    }

    if (countries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    if (countries.length === 1 || selectedCountry) {
        return (
            <CountryDetails
                country={selectedCountry ? selectedCountry : countries.at(0)}
            />
        ) 
    }

    return countries.map((country) => (
        <div
            key={country.name.common}
        >
            {country.name.common}
            
            <button onClick={() => setSelectedCountry(country)}>{'show'}</button>
        </div>
    ))
}

export default CountryList
