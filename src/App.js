
import React from 'react';
import Login from './components/Login';
import { useState } from 'react';
import Alert from './components/Alert';
import Datos from './components/Datos';



const App = () => {
  const [alerta, setAlerta] = useState ({sms: '', color: ''})

  return (
    <div className='container text-center mt-5'>
      <div>
        <h1>Componentes y Estados</h1>
      </div>
      <div>
      <Login setAlerta = {setAlerta} />
      <Alert alerta = {alerta}/>
      <Datos />
      </div>
    </div>
  )
}

export default App
 