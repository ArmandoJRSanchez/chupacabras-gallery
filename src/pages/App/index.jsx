import './App.css'
import { HashRouter, useRoutes } from 'react-router-dom'
import Home from '../home'
import Contact from '../contact'
import Faq from '../Faq'
import Gallery from '../gallery'
import Detail from '../detailPicture'
import Artists from '../artists'
import About from '../about'
import NotFound from '../NotFound'
import ArtistDetail from '../../components/Artists'
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
      { path: '/artist/*', element: <ArtistDetail /> },
      { path: '/faq', element: <Faq /> },
      { path: '/detail/*', element: <Detail /> },
      { path: '/*', element: <NotFound /> },
    ])

    return routes;
  }

  return (
    <GalleryProvider>
      <HashRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <Footer />
      </HashRouter>
    </GalleryProvider>
  )
}

export default App
