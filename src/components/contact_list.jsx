import React from 'react'

function ContactList() {
  const todoResp = `
  {
    status: "success",
    task: Respuesta solicitada
  }
  `
  const todoDeletedResp = `
  {
    status: "success"
  }
  `
  return (
    <div class='container py-5'>
      <h1>
        En esta seccion estan los endpoint y sus respuestas para el ejercico Todo list
      </h1>

      <h2>Obtener todas las tareas</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/get_all_todoList/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {todoResp}
        </code>
      </pre>

      <h2>Obtener una tarea</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/get_one_todoList/:id
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {todoResp}
        </code>
      </pre>

      <h2>Crear una tarea</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/post_todoList/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {todoResp}
        </code>
      </pre>

      <h2>Eliminar una tarea</h2>
      <p>Endpoint</p>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.comapi/api/v1/delete_all_todoList/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {todoDeletedResp}
        </code>
      </pre>

      <h2>Eliminar todas las tareas</h2>
      <p>Endpoint</p>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.comapi/v1/delete_one_todoList/:id
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {todoDeletedResp}
        </code>
      </pre>

      <hr/>
    </div>
  )
}

export default ContactList
