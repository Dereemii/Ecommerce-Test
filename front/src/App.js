import React, { useEffect, useState } from 'react'

const App = () => {
  // store response from server
  const [response, setResponse] = useState('')

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Prueba tecnica front Ecomsur 2021</h1>
      <p>Borra esto y comienza aqui.</p>
      {/* Check to see if express server is running correctly */}
      <h5>{response}</h5>
    </div>
  )
}

export default App
