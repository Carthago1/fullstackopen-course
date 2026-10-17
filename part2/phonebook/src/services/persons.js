import axios from 'axios'

const BASE_URL = 'http://localhost:3001/persons'

const getPersonList = () => axios.get(BASE_URL)

const createPerson = (newPerson) =>  axios.post(BASE_URL, newPerson)

const updatePerson = (id, updatedPerson) => axios.put(`${BASE_URL}/${id}`, updatedPerson)

const deletePerson = (id) => axios.delete(`${BASE_URL}/${id}`)

export default {
    getPersonList,
    createPerson,
    updatePerson,
    deletePerson,
}
