import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <main className='App' data-theme='astrologyTheme'>
      <Header />
      <Login />
      <Footer />
      <ToastContainer position='bottom-right' />
    </main>
  );
}

export default App;
