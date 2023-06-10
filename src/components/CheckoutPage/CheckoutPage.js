import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import db from "../../Services/firebaseConfig";
import CheckoutForm from "../CheckoutForm/checkoutForm";
import Swal from "sweetalert2";


const CheckoutPage = () => {
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

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
        navigate("/");
        ;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onCheckout={handleCheckout} />
      {orderId && <p>Su número de orden es: {orderId}</p>}
    </div>
  );
};

export default CheckoutPage;

