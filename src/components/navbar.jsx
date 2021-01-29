import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className='container'>
        <a className="navbar-brand" href="/">
          <h1>CRUD</h1>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-menu-position" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#todoList">
                <h3>Todo List</h3>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactList">
                <h3>Contact List</h3>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#users">
                <h3>Usuarios</h3>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#error">
                <h3>Errores</h3>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fetch">
                <h3>Fetch</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
