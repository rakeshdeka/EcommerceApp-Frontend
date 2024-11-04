import Body from './pages/Body/Body'
import AboutUs from './pages/AboutUs/AboutUs'
import Cart from './pages/CheckOut/Cart'
import { Error } from './pages/Error/Error'
import ProductList from './components/ProductList/ProductList'
import { createHashRouter, Outlet } from 'react-router-dom'
import AdminDashboard from './components/DashBoard/AdminDashboard/AdminDashboard';
import CheckOut from './pages/CheckOut/CheckOut';
import WishList from './pages/WishList/WishList';
import AccountDeletion from './pages/AccountDeletion/AccountDeletion'
import MyDash from './pages/MyDash/MyDash'
import OrdersReturns from './pages/MyDash/OrdersReturns/OrdersReturns'
import Overview from './pages/MyDash/Overview/Overview'
import Coupon from './pages/MyDash/Coupon'
import Profile from './pages/MyDash/Profile'
import MynCash from './pages/MyDash/MynCash'
import MyntraCredit from './pages/MyDash/MyntraCredit'
import SavedCards from './pages/MyDash/SavedCards'
import SavedUPI from './pages/MyDash/SavedUPI'
import SavedWalletsBNPL from './pages/MyDash/SavedWalletsBNPL'
import Address from './pages/MyDash/Address'
import CheckOutAddress from "./pages/CheckOut/Address"
import ProductDetail from "./components/detail/index"
import { Navigate } from 'react-router-dom'
import Login from './components/Authentication/Login/Login'
import WomanPage from './pages/Body/WomanPage'
import KidsPage from './pages/Body/KidsPage'
import HomeLivingPage from './pages/Body/HomeLivingPage'
import PersonalCarePage from './pages/Body/PersonalCarePage'
import MenPage from './pages/Body/MenPage'

function App() {
  return (
    <div className=''>

      <Outlet />

    </div>
  )
}
export const appRouter = createHashRouter([
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
        path: "/wishlist",
        element: <WishList />,

      },
      {
        path: "/product-list",
        element: <ProductList />,

      },
      {
        path: "/login",
        element: <Login />,

      },

      {
        path: "/checkout",
        element: <CheckOut />,
        children: [

          { path: "bag", element: <Cart /> },
          { path: "address", element: < CheckOutAddress /> },
        ]

      },

      {
        path: "/overview",
        element: <ProductDetail />,
      },
      {
        path: "/my/dashboard/",
        element: <MyDash />,
        children: [
          { path: "", element: <Navigate to="overview" replace /> },
          { path: "overview", element: <Overview /> },
          { path: "orders", element: <OrdersReturns /> },
          { path: "coupons", element: <Coupon /> },
          { path: "myntra-credit", element: <MyntraCredit /> },
          { path: "myncash", element: <MynCash /> },
          { path: "profile", element: <Profile /> },
          { path: "saved-cards", element: <SavedCards /> },
          { path: "saved-upi", element: <SavedUPI /> },
          { path: "saved-wallets-bnpl", element: <SavedWalletsBNPL /> },
          { path: "addresses", element: <Address /> },
        ],
      },
      {
        path: "/shop",
        element: <MenPage />,
        children: [
          {
            path: "", element: <Navigate to="men" replace />
          },
          { path: "men", element: <MenPage /> },
          { path: "women", element: <WomanPage /> },
          { path: "kids", element: <KidsPage /> },
          { path: "home-living", element: <HomeLivingPage /> },
          { path: "personal-care", element: <PersonalCarePage /> }
        ]
      },

    ],
  },

  {
    path: "/admin",
    element: <AdminDashboard />,
    errorElement: <Error />,
  },

  {
    path: "/deactivate",
    element: <AccountDeletion />,
    errorElement: <Error />
  }

]);

export default App



//  category
// https://www.myntra.com/men-topwear
//  sub_category

// https://www.myntra.com/men-tshirts?f=Categories%3ATshirts
// https://www.myntra.com/women-ethnic-bottomwear?f=categories%3AChuridar%2CLeggings%2CSalwar

// on search
// https://www.myntra.com/shirt?rawQuery=shirt