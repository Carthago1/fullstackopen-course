import Person from './Person'

const PersonList = ({ persons, onDeletePerson }) => (
    persons.map((person) => (
        <Person
            key={person.id}
            person={person}
            onDeletePerson={onDeletePerson}
        />
    ))
)

export default PersonList
