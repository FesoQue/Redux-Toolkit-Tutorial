import './index.css';
import Navbar from './component/Navbar';
import CartContainer from './component/CartContainer';
import Modal from './component/Modal';
import { useSelector } from 'react-redux';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
