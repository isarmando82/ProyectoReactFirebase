import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1 className="m-4">No hay items en el carrito</h1>
        <div className="b">
          <button className="rounded m-4">
            <Link to="/" className="nn">
              Hacer compras
            </Link>
          </button>
          <button className="rounded m-4" onClick={() => clearCart()}>
            Limpiar Carrito
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 className="m-4">Total: ${total}</h3>
      <div className="b">
        <button className="m-4 p-3 rounded" onClick={() => clearCart()}>
          Limpiar Carrito
        </button>
        <button className="m-4 p-3 rounded">
        <Link to="/checkout" className="nn rounded-button">
          Checkout
        </Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;

