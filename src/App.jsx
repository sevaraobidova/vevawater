import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ShopProduct from './pages/Profile/components/ShopProduct/ShopProduct';
import ProfileBooking from './pages/Profile/components/ProfileBooking/ProfileBooking';

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShopProduct />} />
          <Route path="profile" element={<ProfileBooking />} />
        </Route>
      </Routes>
   </>
  );
}

export default App;
