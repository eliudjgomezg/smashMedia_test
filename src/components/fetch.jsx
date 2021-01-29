import React from 'react'

function Fetch() {
  const getMethod = `
  fetch('URL', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(resp => { return resp.json() })
    .then(data => { Respuesta guardada en "data" lista para ser usada  })
    .catch(error => console.log('Error:', error));
  `

  const postMethod = `
    fetch('URL', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => { return resp.json() })
      .then(data => { Respuesta guardada en "data" lista para ser usada })
      .catch(error => console.log('Error:', error));
    `

  const putMethod = `
      fetch('URL' + id, {
        method: "PUT",
        body: JSON.stringify(taskToEdit),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(resp => { return resp.json() })
        .then(data => { Respuesta guardada en "data" lista para ser usada )
          setLista(listaEdited)
        })
        .catch(error => console.log('Error:', error));
      `

  const deleteMethod = `
    {
      fetch('URL', {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(resp => { return resp.json() })
        .then(data => { Respuesta guardada en "data" lista para ser usada })
        .catch(error => console.log('Error:', error));
    }
      `

  return (
    <div className='container py-5'>
      <h1>
        Metodos disponibles para el uso de fetch
      </h1>

      <h3>GET</h3>
      <pre>
        <code>
          {getMethod}
        </code>
      </pre>

      <h3>POST</h3>
      <pre>
        <code>
          {postMethod}
        </code>
      </pre>

      <h3>PUT</h3>
      <pre>
        <code>
          {putMethod}
        </code>
      </pre>

      <h3>DELETE</h3>
      <pre>
        <code>
          {deleteMethod}
        </code>
      </pre>

      <hr />
    </div>
  )
}

export default Fetch