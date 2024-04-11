import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop"
import Cart from "../Pages/Cart/Cart"
import Checkout from "../Pages/Checkout/Checkout"
import Detail from "../Pages/Detail/Detail"
import Contact from "../Pages/Contact/Contact"
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
     </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
