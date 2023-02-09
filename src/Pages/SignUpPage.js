import React,{ useState } from 'react'
import InputForm from '../components/InputForm'

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  //비밀번호 int변환해야함
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <div>
      <div>
        <InputForm 
          formName='signup' 
          email={email} 
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          name={name}
          setName={setName}
        />
      </div>
    </div>
  )
}

export default SignUpPage