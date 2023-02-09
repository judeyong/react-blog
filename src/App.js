import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import routes from './route';
import { useDispatch } from 'react-redux';
import { login, loggedEmail } from './store/authSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('isLoggedIn')) {
      dispatch(loggedEmail(localStorage.getItem('isLoggedIn')))
      dispatch(login());
    }
  }, []);

  return (
    <div>
      <Routes>
        {routes.map((route) => {
          return ( 
            <Route
            key={route.path}
            path={route.path}
            element={route.element}
            />
          );       
        })}
      </Routes>
    </div>
  );
}

export default App;
