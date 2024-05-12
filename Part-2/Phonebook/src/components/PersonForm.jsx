const PersonForm = ({ addPerson, newName, newPerson, newNumber, newPhoneNumber }) => {
    return(
        <form onSubmit={addPerson}>
            <div>
            name: <input value={newName} onChange={newPerson}/>
            </div>
            <div>
            number: <input value={newNumber} onChange={newPhoneNumber}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm;