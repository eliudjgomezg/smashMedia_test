import React from 'react'

function Error() {
  const error = `
{
  status: "error",
  message: Descripción del error
}
  `

  return (
    <div className='container py-5' >
      <h1>Error</h1>
      <h3>
        Cada vez que ocurra un error en el request, la estructura de la respuesta sera la siguiente:
      </h3>

      <pre>
        <code>
          {error}
        </code>
      </pre>

      <hr id='fetch' />
    </div>
  )
}

export default Error
