import React,  { useState } from 'react'
import InputForm from '../components/InputForm';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);

  return (
    <div>
        <div >
          <InputForm 
           formName='login'
           email={email} 
           password={password}
           setEmail={setEmail}
           setPassword={setPassword}
          />
        </div>
    </div>
  )
}

export default LoginPage