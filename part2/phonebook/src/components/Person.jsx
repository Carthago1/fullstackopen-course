const Person = ({ person, onDeletePerson }) => (
    <p>
        {person.name} {person.number}
        <button onClick={() => onDeletePerson(person.id)}>{'delete'}</button>
    </p>
)

export default Person
