import { useState } from 'react'
import { HashRouter, useRoutes } from "react-router-dom";

import './App.css'
import Dashboard from '../Dashboard';
import Gallery from '../Gallery';
import Sidebar from '../../Complements/Sidebar';
import Layout from '../../Complements/Layout';


const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/gallery", element: <Gallery /> },
  ]);

  return routes;
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Sidebar />
        <Layout>
          <Routes />
        </Layout>
      </HashRouter>
    </>
  )
}

export default App
