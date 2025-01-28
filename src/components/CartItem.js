import React from 'react';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
    return (
        <div className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button onClick={() => onDecrease(item.id)} className="bg-gray-200 px-2 py-1 rounded">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => onIncrease(item.id)} className="bg-gray-200 px-2 py-1 rounded">+</button>
                <button onClick={() => onRemove(item.id)} className="ml-4 text-red-500">Remove from Cart</button>
            </div>
        </div>
    );
};

export default CartItem;