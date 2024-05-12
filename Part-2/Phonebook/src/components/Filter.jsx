const Filter = ({ filter, newFilter }) => {
    return(
        <div>
            filter shown with: <input value={filter} onChange={newFilter} />
        </div>
    )
}

export default Filter;