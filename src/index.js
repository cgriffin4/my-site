import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Layout } from './layout';
import NotFound from './pages/404';
import Home from './pages/home';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import { runLoader } from './models/run';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About/> },
      { path: 'dashboard', loader: runLoader, element: <Dashboard/> },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
