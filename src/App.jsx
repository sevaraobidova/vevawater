import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ShopProducts from "./pages/ShopProduct/ShopProducts";
import ShopProduct from "./pages/ShopProduct/ShopProduct";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/Error";
import OrderHistory from "./pages/Profile/components/OrderHistory/OrderHistory";
import OrderStatus from "./pages/Profile/components/OrderStatus/OrderStatus";
import PersonalInformation from "./pages/Profile/components/PersonalInformation/PersonalInformation";
import ShoppingCart from "./pages/Profile/components/ShoppingCart/ShoppingCart";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const clientQuery = new QueryClient();
  return (
    <>
      <QueryClientProvider client={clientQuery}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<ShopProducts />}>
              <Route path=":productId" element={<ShopProduct />} />
            </Route>
            <Route path="profile" element={<Profile />}>
              <Route path="cart" element={<ShoppingCart />} />
              <Route path="history" element={<OrderHistory />} />
              <Route path="info" element={<PersonalInformation />} />
              <Route path="status" element={<OrderStatus />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
