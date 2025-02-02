import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = calculateTotal();
  const discountedPrice = totalPrice * 0.9; // 10% discount

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <h2 className="text-lg">{item.title}</h2>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => dispatch(increaseQuantity(item.id))} className="bg-blue-500 text-white px-2 py-1 rounded">+</button>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} className="bg-blue-500 text-white px-2 py-1 rounded">-</button>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-500 text-white px-2 py-1 rounded ml-2">Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h2 className="text-xl font-bold">Total: ${discountedPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;