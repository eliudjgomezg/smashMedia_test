import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class='container'>
        <a class="navbar-brand" href="#">CURD API</a>

        <div class='float-right'>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">API <span class="sr-only"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">GET</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">POST</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">PUT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">DELETE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
