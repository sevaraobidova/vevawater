import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ShopProduct from './pages/Profile/components/ShoppingCart/ShoppingCart';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error'
import OrderHistory from './pages/Profile/components/OrderHistory/OrderHistory';
import OrderStatus from './pages/Profile/components/OrderStatus/OrderStatus';
import PersonalInformation from './pages/Profile/components/PersonalInformation/PersonalInformation';
import ShoppingCart from './pages/Profile/components/ShoppingCart/ShoppingCart';

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShopProduct />} />
          <Route path="profile" element={<Profile />}>
            <Route path='cart' element={<ShoppingCart/>}/>
            <Route path='history' element={<OrderHistory/>}/>
            <Route path='info' element={<PersonalInformation/>}/>
            <Route path='status' element={<OrderStatus/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
   </>
  );
}

export default App;
