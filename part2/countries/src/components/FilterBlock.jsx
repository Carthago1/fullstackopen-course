const FilterBlock = ({ search, setSearch }) => (
    <div>
        find countries <input value={search} onChange={(event) => setSearch(event.target.value)} />
    </div>
)

export default FilterBlock
