import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import styled from 'styled-components';

const Nav = () => {
  const isloggedIn = useSelector((state) => {
    return state.auth.isloggedIn;
  })
  const dispatch = useDispatch();

  //console.log('isloggedIn', isloggedIn);
  return (
    <div className='nav-main'>
      <div className='nav-bar'>
        <div className='nav-title'>
          <h2><Link className='title-link' to='/'>My Blog</Link></h2>
        </div>
        <div>
          {isloggedIn? (
            <small><b>{localStorage.getItem('isLoggedIn')}</b> 님 안녕하세요!</small>
          ):
          ""}
        </div>
        <div className='nav-link'>
          {isloggedIn ? (
            <StyledBtn onClick={() => {
              dispatch(logout());
            }}>로그아웃</StyledBtn>
          ) :(
            <div>
              <Link className='login-link' to='login'>로그인</Link>
              <Link className='signup-link' to='signup'>회원가입</Link>
            </div>
          )}          
        </div>
      </div>
    </div>
  )
}

const StyledBtn = styled.button`
  border: none;
  border-Radius: 5px;
  padding: 5px;
  font-Size: 25px;
  color: black;
  background-color: #CDCDCD;
  &:hover {  
    background-color : #DEDEDE;
  }
`;
export default Nav