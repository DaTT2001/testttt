import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import About from './pages/About';
import NoPage from './pages/NoPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='about-us' element={<About />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
    <ToastContainer />
    </>
    
  );
}

export default App;
