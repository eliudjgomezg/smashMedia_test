import React from 'react'

function Users() {
  const respAll = `
{
  status: "success",
  users: [{...}, {...}, {...}, {...}]
}
  `
  const resp = `
{
  status: "success",
  user: {...}
}
  `
  const deleteResp = `
{
  status: "success"
}
  `
  const schema = `
name: type: String, required: true 
email: type: String, required: true, unique: true 
phone: type: Number, required: true 
password: type: String, required: true

Esta es la esctructura de datos con la que debes crear un usuario. 
La api solo permite crear Usuarios unicos, asi que si repites el "correo" de un usuario ya creado, devolverá un error.
Ver sección de errores.
  `

  return (
    <div className='container py-5'>
      <h1>
        En esta seccion estan los endpoint y sus respuestas para hacer CRUD con usuarios
      </h1>

      <h2>Estructura de datos del usuario</h2>
      <h3>Schema</h3>
      <pre>
        <code>
          {schema}
        </code>
      </pre>

      <h2>Obtener todos los Usuarios</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/get_all_users/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {respAll}
        </code>
      </pre>

      <h2>Obtener un usuario</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/get_one_user/id (Borrar id y reemplazar)
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {resp}
        </code>
      </pre>

      <h2>Login un usuario</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/login_user/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {resp}
          Para hacer login de un usuario, usar el metodo POST
        </code>
      </pre>

      <h2>Crear un usuario</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/post_user/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {resp}
        </code>
      </pre>

      <h2>Editar una tarea</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/put_user/id (Borrar id y reemplazar)
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {resp}
        </code>
      </pre>

      <h2>Eliminar un usuario</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/delete_one_user/id (Borrar id y reemplazar)
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {deleteResp}
        </code>
      </pre>

      <h2>Eliminar todas los Usuarios</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/delete_all_users/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {deleteResp}
        </code>
      </pre>

      <hr id='error'/>
    </div>
  )
}

export default Users
