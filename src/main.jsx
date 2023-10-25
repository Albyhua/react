import ReactDOM from 'react-dom/client'

import './index.css'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createHashRouter, RouterProvider } from 'react-router-dom';

// retrieving bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';


// need to make route to homepage
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/About',
        element: <About />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
