import { useState } from 'react'
import { useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
	const [persons, setPersons] = useState([])
	const [search, setSearch] = useState('')
 	const [newName, setNewName] = useState('')
	const [newPhoneNumber, setNewPhoneNumber] = useState('')
	const [notification, setNotification] = useState()

	useEffect(() => {
		personService
			.getPersonList()
			.then((response) => {
				setPersons(response.data)
			})
	}, [])

	const onSubmit = (event) => {
		event.preventDefault()

		const person = persons.find((person) => person.name === newName.trim())

		if (person) {
			const isSuccess = confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)

			if (isSuccess) {
				personService
					.updatePerson(person.id, { ...person, number: newPhoneNumber })
					.then((response) => {
						setPersons(persons.map((person) => person.id === response.data.id ? response.data : person))
						setNewPhoneNumber('')
						setNewName('')
						setNotification({ text: `Updated ${ person.name }`, status: 'success' })
						setTimeout(() => {
          					setNotification()
        				}, 2000)
					})
					.catch(() => {
						setPersons(persons.filter((el) => el.id !== person.id))
						setNotification({ text: `Information of ${person.name} has already beed removed from server`, status: 'error' })
						setTimeout(() => {
          					setNotification()
        				}, 2000)
					})
			}

			return
		}

		const newPerson = { name: newName, number: newPhoneNumber }

		personService
			.createPerson(newPerson)
			.then((response) => {
				setPersons(persons.concat(response.data))
				setNewPhoneNumber('')
				setNewName('')
				setNotification({ text: `Created person ${ newPerson.name }`, status: 'success' })
				setTimeout(() => {
					setNotification()
				}, 2000)
			})
	}

	const onDeletePerson = (id) => {
		personService
			.deletePerson(id)
			.then((response) => {
				setPersons(persons.filter((person) => person.id !== response.data.id))
				setNotification({ text: `Deleted person with ID: ${ id }`, status: 'success' })
				setTimeout(() => {
					setNotification()
				}, 2000)
			})
			.catch(() => {
				setPersons(persons.filter((person) => person.id !== id))
				setNotification({ text: `Information of person ID: ${id} has already beed removed from server`, status: 'error' })
				setTimeout(() => {
					setNotification()
				}, 2000)
			})
	}

	const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))

	return (
		<div>
			<h2>Phonebook</h2>

			<Notification 
				notification={notification}
			/>

			<Filter 
				search={search}
				setSearch={setSearch}
			/>

			<h3>add a new</h3>

			<PersonForm 
				newName={newName}
				newPhoneNumber={newPhoneNumber}
				setNewName={setNewName}
				setNewPhoneNumber={setNewPhoneNumber}
				onSubmit={onSubmit}
			/>

			<h3>Numbers</h3>

			<PersonList 
				persons={filteredPersons}
				onDeletePerson={onDeletePerson}
			/>
		</div>
	)
}

export default App
