import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='bg-gray-300 h-16 nav-container'>
                <h1 className='text-5xl'>mealDB</h1>
                <div className='nav-list'>
                    <a href="#">Home</a>
                    <a href="#">API</a>
                    <a href="#">Form</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;