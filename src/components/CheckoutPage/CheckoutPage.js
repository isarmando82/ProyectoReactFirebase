import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "../../Services/firebaseConfig";
import CheckoutForm from "../CheckoutForm/checkoutForm";
import Swal from "sweetalert2";
import { CartContext } from "../../Context/CartContext";

const CheckoutPage = () => {
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  // Obtén la función clearCart del contexto
  const { clearCart } = useContext(CartContext);

  const handleCheckout = async (order) => {
    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);

      Swal.fire({
        icon: "success",
        title: "¡Compra realizada con éxito!",
        text: `Su número de orden es: ${docRef.id}`,
      }).then(() => {
        // Limpia el carrito después de completar la compra
        clearCart();
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="m-4">Checkout</h1>
      <CheckoutForm onCheckout={handleCheckout} />
    </div>
  );
};

export default CheckoutPage;
