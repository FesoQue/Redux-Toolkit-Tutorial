import './index.css';
import Navbar from './component/Navbar';
import CartContainer from './component/CartContainer';
import Modal from './component/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  const { cartItems, isLoading } = useSelector((state) => state.cart);

  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    <div className='loading'>
      <h1>Loading...</h1>
    </div>;
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
