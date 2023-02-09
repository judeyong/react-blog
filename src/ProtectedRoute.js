import React from 'react'
import { useSelector } from 'react-redux'
import { redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ path, component }) => {
  const authRedux = useSelector(state => state.auth.isLoggedIn);

  if(!authRedux) {
    return redirect('login');
  }
  
  return (
    <Route path={path} component={component} />
  )
}

export default ProtectedRoute