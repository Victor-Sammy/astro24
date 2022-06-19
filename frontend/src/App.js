import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import Description from './pages/Description/Description/Description';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import RechargeNow from './pages/wallet/RechargeNow';
import Wallet from './pages/wallet/Wallet';

function App() {
  return (
    <main className='App' data-theme='astrologyTheme'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/description' element={<Description />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/recharge/:id' element={<RechargeNow />} />
      </Routes>
      <Footer />
      <ToastContainer position='bottom-right' />
    </main>
  );
}

export default App;
