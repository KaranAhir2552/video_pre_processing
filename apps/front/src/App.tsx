import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Auth/Login';

import Register from './Auth/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
