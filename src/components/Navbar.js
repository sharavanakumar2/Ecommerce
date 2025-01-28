import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl">E-Commerce</h1>
                <div>
                    <Link to="/" className="text-white mx-4">Products</Link>
                    <Link to="/cart" className="text-white mx-4">Cart</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;