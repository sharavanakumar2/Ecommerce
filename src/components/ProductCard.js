import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="border rounded-lg p-4 m-2 shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-gray-500">{product.description}</p>
      <button 
        onClick={isInCart ? handleRemoveFromCart : handleAddToCart} 
        className={`mt-4 px-4 py-2 rounded ${isInCart ? 'bg-red-500' : 'bg-blue-500'} text-white`}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;