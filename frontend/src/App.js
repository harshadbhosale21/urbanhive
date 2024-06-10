import React from 'react';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserDashboard from './components/dashboard/userDashboard.jsx';
import Cart from './components/cart/Cart.jsx';
import { About, Contact } from './pages/about-contact/Pages.jsx';
import ShopPages from './pages/shop/ShopPages.jsx';
import Home from './pages/home/Home.jsx';
import { Footer, Navbar } from './components/layout/Layout.jsx';
import ProductView from './pages/shop/ProductView.jsx';
import { useAuthContext } from './context/userAuth.jsx';
import LoginUser from './components/user/LoginUser.jsx';
import Signup from './components/user/SignupUser.jsx';
import { Toaster } from 'react-hot-toast';
import BuyProduct from './components/cart/BuyProduct.jsx';

const App = () => {
  return (
    <>
      <Router>
        <main>
          <AppComponent />
        </main>
      </Router>

    </>
  )
}

const AppComponent = () => {
  const { authUser } = useAuthContext();


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shoppages' element={<ShopPages />}></Route>
        <Route path='/shoppages/:id' element={<ProductView />}></Route>
        <Route path='/login' element={<LoginUser />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/shopcart' element={<Cart />}></Route>
        <Route path='/user-dashboard' element={authUser ? <UserDashboard /> : <Navigate to='/login' />}></Route>
        <Route path='/buyitem/:id' element={authUser ? <BuyProduct /> : <Navigate to='/login' />}></Route>
      </Routes>
      <Toaster />
      <Footer />
    </>
  )
}

export default App;

