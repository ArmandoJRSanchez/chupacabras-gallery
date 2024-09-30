import './App.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../home'
import Contact from '../contact'
import Faq from '../Faq'
import Gallery from '../gallery'
import Detail from '../detailPicture'
import Artists from '../artists'
import About from '../about'
import NotFound from '../NotFound'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import { GalleryProvider } from '../../context'

function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about-us', element: <About /> },
      { path: '/artists', element: <Artists /> },
      { path: '/artists/*', element: <Artists /> },
      { path: '/faq', element: <Faq /> },
      { path: '/detail/*', element: <Detail /> },
      { path: '/*', element: <NotFound /> },
    ])

    return routes;
  }

  return (
    <GalleryProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <Footer />
      </BrowserRouter>
    </GalleryProvider>
  )
}

export default App
