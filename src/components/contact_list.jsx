import React from 'react'

function ContactList() {
  const respAll = `
{
  status: "success",
  contacts: [{...}, {...}, {...}, {...}]
}
    `

  const resp = `
{
  status: "success",
  contact: {...}
}

  `
  const deleteResp = `
{
  status: "success"
}
  `

  const schema = `
name: type: String, required: true, unique: true, dropDups: true 
email: type: String, required: true, unique: true, dropDups: true 
phone: type: Number, required: true
address: type: String, required: true

Esta es la esctructura de datos con la que debes crear un contacto. 
La api solo permite crear contactos unicos, asi que si repites el "nombre" o "correo" de un contacto ya creado, devolverá un error.
Ver sección de errores.
  `
  return (
    <div className='container py-5'>
      <h1>
        En esta seccion estan los endpoint y sus respuestas para el ejercico Contact list
      </h1>

      <h2>Estructura de datos de un contacto</h2>
      <h3>Schema</h3>
      <pre>
        <code>
          {schema}
        </code>
      </pre>

      <h2>Obtener todos los contactos</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/get_all_contactList/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {respAll}
        </code>
      </pre>

      <h2>Obtener un contacto</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/get_one_contactList/id (Borrar id y reemplazar)
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {resp}
        </code>
      </pre>

      <h2>Crear un contacto</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/post_contactList/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {resp}
        </code>
      </pre>

      <h2>Editar un contacto</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/put_contactList/id (Borrar id y reemplazar)
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {resp}
        </code>
      </pre>

      <h2>Eliminar un contacto</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/delete_one_contactList/id (Borrar id y reemplazar)
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {deleteResp}
        </code>
      </pre>

      <h2>Eliminar todas los contactos</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/delete_all_contactList/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {deleteResp}
        </code>
      </pre>

      <hr id='users' />
    </div>
  )
}

export default ContactList
