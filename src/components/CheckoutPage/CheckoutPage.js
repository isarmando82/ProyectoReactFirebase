import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "../../Services/firebaseConfig";
import CheckoutForm from "../CheckoutForm/checkoutForm";
import Swal from "sweetalert2";
import { CartContext } from "../../Context/CartContext";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const { clearCart } = useContext(CartContext);

  const handleCheckout = async (order) => {
    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);

      Swal.fire({
        icon: "success",
        title: "¡Compra realizada con éxito!",
        text: `Su número de orden es: ${docRef.id}`,
      }).then(() => {
  
        clearCart();
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="m-4 p-4">Checkout</h1>
      <CheckoutForm onCheckout={handleCheckout} />
    </div>
  );
};

export default CheckoutPage;
