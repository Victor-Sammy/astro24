import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import AccountDashboard from './pages/account/AccountDashboard'
import CardInfo from './pages/account/CardInfo'
import ManageAddress from './pages/account/ManageAddress'
import ProfileInformation from './pages/account/ProfileInformation'
import Login from './pages/Authentication/Login/Login'
import Signup from './pages/Authentication/Signup/Signup'
import Description from './pages/Description/Description/Description'
import Home from './pages/Home/Home/Home'
import Footer from './pages/Shared/Footer/Footer'
import Header from './pages/Shared/Header/Header'
import RechargeNow from './pages/wallet/RechargeNow'
import Wallet from './pages/wallet/Wallet'
import Compare from './pages/compare/Compare'
import RecentAll from './pages/productsRecent/RecentAll'
import NewlyAll from './pages/newlyAll/NewlyAll'
import UpcomingAll from './pages/upcomingAll/UpcomingAll'
import BestAll from './pages/bestAll/BestAll'
import Return from './pages/return/Return'
import Offers from './pages/offer/Offers'

function App() {
  return (
    <main className='App' data-theme='astrologyTheme'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/return' element={< Return />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/description' element={<Description />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/recharge/:id' element={<RechargeNow />} />
        {/* account */}
        <Route path='/account' element={<AccountDashboard />}>
          <Route index element={<ProfileInformation />} />
          <Route path='manage-address' element={<ManageAddress />} />
          <Route path='card-info' element={<CardInfo />} />
        </Route>
        <Route path='/productsRecent' element={<RecentAll />} />
        <Route path='/newlyAll' element={<NewlyAll />} />
        <Route path='/bestAll' element={<BestAll />} />
        <Route path='/upcomingAll' element={<UpcomingAll />} />
      </Routes>
      <Footer />
      <ToastContainer position='bottom-right' />
    </main>
  )
}

export default App
