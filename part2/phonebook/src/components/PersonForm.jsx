const PersonForm = ({ newName, newPhoneNumber, setNewName, setNewPhoneNumber, onSubmit}) => (
    <form
        onSubmit={onSubmit}
    >
        <div>
            name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>

        <div>
            number: <input value={newPhoneNumber} onChange={(event) => setNewPhoneNumber(event.target.value)} />
        </div>

        <div>
            <button type={'submit'}>add</button>
        </div>
    </form>
)

export default PersonForm
