import axios from 'axios'

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountryList = () => 
    axios
    .get(`${BASE_URL}/all`)
    .then((response) => response.data)


export default {
    getCountryList,
}
