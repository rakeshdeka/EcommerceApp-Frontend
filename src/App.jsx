import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Cart from './components/Cart'
import './App.css'

import { createBrowserRouter, Outlet } from 'react-router-dom'

function App() {


  return (
    <>

      {/* <ProductCard /> */}
      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

    ],
  },
]);

export default App
