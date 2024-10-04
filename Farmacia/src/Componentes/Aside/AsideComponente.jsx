
const AsideComponente = () => {
    return (
      <aside className="search-aside">
        <form className="search-form">
          <input 
            type="text" 
            className="search-input" 
            placeholder="¿Qué estás buscando?" 
            aria-label="Buscar" 
          />
          <input 
            type="submit" 
            className="search-button" 
            value="Buscar" 
          />
        </form>
      </aside>
    );
  }
  
  export default AsideComponente;
  
