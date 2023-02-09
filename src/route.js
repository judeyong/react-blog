import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import Home from './Pages/Home';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path:'/login',
    element: <LoginPage />,
    auth: false,
  },
  {
    path:'/signup',
    element: <SignUpPage />,
    auth: false,
  },
]

export default routes;