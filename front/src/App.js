import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList';

//redux
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
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
  // -------------------------------------------------

  return (
    <>
      {response}
      <Provider store={store}>
        <ProductList />
      </Provider>
    </>

  )
}

export default App
