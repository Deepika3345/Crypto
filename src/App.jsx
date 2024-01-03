import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoinContainer from './components/CoinContainer'
import CoinDetail from './pages/CoinDetail'
import Trade from './pages/Trade'
import Promotion from './pages/Promotion'
import Refrences from './pages/Refrences'
import Guide from './pages/Guide'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import CoinCard from './components/CoinCard'

const App = () => {
  // const {coins}=useParams()

  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coincontainer' element={<CoinContainer />} />
          
          {/* <Route path='coincard' element={<CoinCard />} /> */}
          <Route path='/learnmore/:ID' element={<CoinDetail />} />

          {/* <Route path='/coincontainer/:coins' element={<CoinDetail />} /> */}
          <Route path='/trade' element={<Trade />} />
          <Route path='/promotion' element={<Promotion />} />
          <Route path='/refrences' element={<Refrences />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/signup' element={<SignUp />} />

          <Route path='/login' element={<Login />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App