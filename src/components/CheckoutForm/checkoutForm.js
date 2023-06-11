import { useState } from 'react';

const CheckoutForm = ({ onCheckout }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckout = () => {
    

    const order = {
      name,
      phoneNumber,
      email,

    };

    onCheckout(order);
  };

  return (
    <div>
      <form className='m-4'>
        <div>
          <label className='m-3'>Nombre y Apellido:</label>
          <input required type="text" value={name} onChange={handleNameChange}  />
        </div>
        <div>
          <label className='m-3'>Numero de Celular:</label>
          <input type="numbers" value={phoneNumber} required onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <label className='m-3' >Correo Electronico:</label>
          <input type="email" value={email} required onChange={handleEmailChange} />
        </div>
        <button type="button" className='m-4 p-3' onClick={handleCheckout}>Realizar Compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
