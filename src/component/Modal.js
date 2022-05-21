import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>remove all item from your shopping cart</h4>
        <div className='btn-container'>
          <button
            type='button'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            className='btn confirm-btn'
          >
            Yes
          </button>
          <button
            type='button'
            onClick={() => dispatch(closeModal())}
            className='btn clear-btn'
          >
            No
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
