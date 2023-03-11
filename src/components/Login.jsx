import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login ({setAlerta}) {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if(email.trim() === 'ricardo@desafiolatam.cl' && password.trim() === 'Generacion28'){
      setAlerta({sms: 'Datos Corectos' , color: 'info'})
      
    }else {
      setAlerta({sms: 'Los Datos NO Son Incorrectos!' , color: 'danger'})
      
    }
  }

  return (
   <div>
     <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!email.trim() || !password.trim()}>
        Submit
      </Button>
    </Form>
   </div>
  );
}

export default Login;