import Navbar from "./components/navbar";
import CartContainer from './components/cartContainer';
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const {cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])

  return <main>
    <Navbar />
    <CartContainer />
  </main>;
}
export default App;
