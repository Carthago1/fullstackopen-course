import { useEffect, useState } from 'react'

import countriesService from './services/country'
import FilterBlock from './components/FilterBlock'
import CountryList from './components/CountryList'

const App = () => {
	const [countries, setCountries] = useState([])
	const [search, setSearch] = useState('')
	const [selectedCountry, setSelectedCountry] = useState()

	useEffect(() => {
		countriesService
			.getCountryList()
			.then((countryList) => setCountries(countryList))
	}, [])

	useEffect(() => {
		setSelectedCountry()
	}, [search])

	const lowerCaseSearch = search.toLowerCase()
	const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(lowerCaseSearch))

	return (
		<div>
			<FilterBlock 
				search={search}
				setSearch={setSearch}
			/>

			<CountryList 
				countries={filteredCountries}
				selectedCountry={selectedCountry}
				setSelectedCountry={setSelectedCountry}
			/>
		</div>
	)
}

export default App
