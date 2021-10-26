// import logo from "./logo.svg";
import "./App.css";
// let name="Prashil"
function App() {
  return (
<>
    <nav classname="navbar navbar-expand-lg navbar-light bg-light">
      <a classname="navbar-brand" href="/">Navbar</a>

      <div classname="collapse navbar-collapse" id="navbarSupportedContent">
        <ul classname="navbar-nav mr-auto">
          <li classname="nav-item active">
            <a classname="nav-link" href="/">Home <span classname="sr-only"></span></a>
          </li>
          <li classname="nav-item active">
            <a classname="nav-link" href="/">About <span classname="sr-only"></span></a>
          </li>

        </ul>
        <form classname="d-flex">
          <input classname="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button classname="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
      
</>
    
  );
}

export default App;
