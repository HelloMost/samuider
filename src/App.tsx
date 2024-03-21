import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'
import Activity from './pages/Activity'
import Atv from './pages/Atv'
import AdminPage from './pages/Admin'
import { ShoppingCartProvider } from './components/ShoppingCart'
import { Checkout } from './pages/Checkout'
import AtvCheckout from './pages/AtvCheckout'



function App() {
  return(
    <ShoppingCartProvider>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Activity' element={<Activity />} />
      <Route path='/Atv' element={<Atv />} />
      <Route path='/Atvcheck' element={<AtvCheckout />} />
      <Route path='/Checkout' element={<Checkout />} />
      <Route path="/Admin" element={<AdminPage />} />
    </Routes>
    </ShoppingCartProvider>
  )
}

function WrappedApp() {
  return(
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  )
}

export default WrappedApp
