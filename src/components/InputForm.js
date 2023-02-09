import React, { useEffect, useState } from 'react'
import './InputForm.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, loggedEmail } from '../store/authSlice';
//import authSlice from '../store/authSlice';

const InputForm = ({ formName, email, password, setEmail, setPassword, name, setName }) => {
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navigation = useNavigate();
  const isloggedIn = useSelector((state) => {
    return state.auth.isloggedIn;
  })
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //회원가입
    if(formName === 'signup') {
      //이미 가입된 email 확인
      axios.get(`http://localhost:3004/members?email=${email}`)
      .then((res) => {
        console.log('res', res.data.length);
        if(res.data.length === 0) {
          axios.post('http://localhost:3004/members', {
            email: email,
            password: parseInt(password),
            name: name
            }).then(() => {
              console.log('success');
              navigation('/login');
            });          
        } else {
          setEmailError(true);
        }
      })
    } else {
      //로그인
      axios.get(`http://localhost:3004/members?email=${email}&password=${password}`)
        .then((res) => {
          console.log('ndata', res.data);
          if(res.data.length > 0){
            //인증작업 redux 사용.
            dispatch(loggedEmail(email));
            dispatch(login());
            //navigation('/');
            console.log('login success');
          } else {
            //DB에 맞는 email, pwd 없는 경우
            setError(true);
          }
        }).catch((error) => {
            console.log('error is ', error)
            setError(true);
          });
    }
  }

  useEffect(() => {
    if(isloggedIn) {
      //이미 로그인한 상태에서 로그인 페이지 접근 못하게.
      console.log('useEffect login');
      navigation('/');
    }
  }, [isloggedIn])

  return (
    <div className='main'>
      <h1>{formName}</h1>
      <form onSubmit={handleSubmit} className='loginForm'>
        <input className='loginField' name='intput_id' type='text' placeholder='이메일' 
          value={email? email:""}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError? (
          <div className='error_box'>
            <small className='error_msg'>이미 가입된 이메일이 존재합니다.</small>
          </div>
        ) : undefined}
        <input className='loginField' name='intput_pwd' type='password' placeholder='비밀번호'
          value={password? password: ""} 
          onChange={(e) => setPassword(e.target.value)}
        />
        {formName === 'signup'? (
        <div>
          <input className='loginField' name='intput_name' type='text' placeholder='이름' 
            value={name? name : ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        ): undefined}
        <input className='submit_btn' type='submit' value={formName === 'login'? '로그인': '회원가입'} />
        <Link to={formName === 'login'? '/signup': '/login'}>{formName === 'login'? '회원가입': '로그인'}</Link>
        <br />
        {error? (
          <div className='error_box'>
            <small className='error_msg'>이메일 혹은 비밀번호가 맞지 않습니다.</small>
          </div>
        ) : undefined}
      </form>
    </div>
  )
}

InputForm.prototype = {
  name: PropTypes.string,
  setName: PropTypes.func,
}
InputForm.defaultProps = {
  name: '',
  setName: ()=>{}
}

export default InputForm