import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ShopProduct from './pages/Profile/components/ShopProduct/ShopProduct';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error'

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShopProduct />} />
          <Route path="profile" element={<Profile />} />
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
   </>
  );
}

export default App;
