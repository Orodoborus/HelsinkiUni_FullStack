const Person = ({ persons }) => {
    return(
        <div>
            {persons.map(p => <p key={p.id}>{p.name} | {p.number}</p>)}
        </div>
    )
}

export default Person;