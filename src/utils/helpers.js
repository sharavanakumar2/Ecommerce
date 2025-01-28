const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
};

const applyDiscount = (totalPrice, discountPercentage) => {
    return totalPrice - (totalPrice * (discountPercentage / 100));
};

const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};

const findItemInCart = (cartItems, productId) => {
    return cartItems.find(item => item.id === productId);
};

export { calculateTotalPrice, applyDiscount, formatPrice, findItemInCart };