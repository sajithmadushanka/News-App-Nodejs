function Navbar() {
    return ( 
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <a className="nav-link active" aria-current="page" href="#" >Home</a>
        <a className="nav-link" href="#">Features</a>
       <a className="nav-link" href="#">Pricing</a>
      </div>
    </nav>
     );
}

export default Navbar;