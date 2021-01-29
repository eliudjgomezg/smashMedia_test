import React from 'react'

function Welcome() {
  return (
    <div class='welcome-section d-flex align-items-center'>
      <div class='container'>
        <h1>
          CRUD Placeholder
        </h1>
        <h2>
          Api desarrollada para obtener, cear, editar y eliminar <br/> datos mediante peticiones http
        </h2>
        <h3>
          Los datos disponibles son: Tareas para todo list, contactos para contact list y usuarios. Si, tambien hay endpoint para hacer login
        </h3>
      </div>
    </div>
  )
}

export default Welcome
