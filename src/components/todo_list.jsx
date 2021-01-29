import React from 'react'

function TodoList() {
  const resp = `
{
  status: "success",
  task: Respuesta solicitada
}
  `
  const deletedResp = `
{
  status: "success"
}
  `

  const schema = `
  assignedTo: { type: String, required: true }
  createdAt: { type: String, required: true }
  task: { type: String, required: true }
  completed: {type: Boolean, default: false}
  `
  return (
    <div className='container py-5' id='todoList'>
      <h1>
        En esta seccion estan los endpoint y sus respuestas para el ejercico Todo list
      </h1>

      <h2>Estructura de datos de una tarea</h2>
      <h3>Schema</h3>
      <pre>
        <code>
          {schema}
        </code>
      </pre>

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
          {resp}
        </code>
      </pre>

      <h2>Obtener una tarea</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/get_one_todoList/id
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {resp}
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
          {resp}
        </code>
      </pre>

      <h2>Editar una tarea</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.com/api/v1/put_todoList/id
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {resp}
        </code>
      </pre>

      <h2>Eliminar una tarea</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.comapi/v1/delete_one_todoList/id
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {deletedResp}
        </code>
      </pre>

      <h2>Eliminar todas las tareas</h2>
      <h3>Endpoint</h3>
      <pre>
        <code>
          https://crud-placeholder.herokuapp.comapi/api/v1/delete_all_todoList/
        </code>
      </pre>

      <h3>Respuesta</h3>
      <pre>
        <code>
          {deletedResp}
        </code>
      </pre>

      <hr id='contactList'/>
    </div>
  )
}

export default TodoList
