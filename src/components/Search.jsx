

const Search = ({search, setSearch}) => {
  return (
    <div className="search">
        <h2>Pesquisar Tarefa:</h2>
        <input type="text" value={search} onChange={(e) =>setSearch(e.target.value)} placeholder="Digite para buscar..."/>
    </div>
  )
}

export default Search