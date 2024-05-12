import { useState } from 'react';
import Person from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const addPerson = (event) =>{
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons[persons.length -1].id + 1
    }

    if(persons.filter(p => p.name === newName).length > 0)
      alert(`${newName} is already added to phonebook`);
    else{
      setPersons(persons.concat(newPerson));
      setNewName('');
    }
  }

  const newPerson = (ev) => setNewName(ev.target.value);
  const newPhoneNumber = (ev) => setNewNumber(ev.target.value);
  const newFilter = (ev) => {
    const searchTerm = ev.target.value;
    setFilter(searchTerm);
    setFilteredPersons(persons.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter}
        newFilter={newFilter}
      />
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        newPerson={newPerson}
        newPhoneNumber={newPhoneNumber}
      />
      <h3>Numbers</h3>
      <Person persons={filteredPersons} />
    </div>
  )
}

export default App;