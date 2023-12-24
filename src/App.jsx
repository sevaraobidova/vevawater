import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ShopProducts from "./pages/ShopProducts/ShopProducts";
import ShopProduct from "./pages/ShopProducts/ShopProduct";
import ProfileBooking from "./pages/Profile/ProfileBooking/ProfileBooking";

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
            <Route path="profile" element={<ProfileBooking />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
