import React, { useContext } from 'react';
import './CartItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../Context/CartContext';


const CartItem = ({ id, title, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className="cart-item">
      <div className="row m-4">
        <div className="col primary">{title}</div>
        <div className="col">Cantidad: {quantity}</div>
        <div className="col">Precio: {price}</div>
        <div className="col">
          <button className="btn btn-success rounded-circle" onClick={handleRemoveItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M8 7.293l4.146-4.147a.5.5 0 1 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 1 1-.708-.708L7.293 8 3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
