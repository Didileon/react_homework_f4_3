import React from 'react';
import { Link } from 'react-router-dom';






const Header = () => {

    return (
        <div>
            <header className='header'>
                <nav className='nav'>
                    <ul>
                        <li className='item'><Link to='Main'>Главная</Link></li>                        
                        <li className='item'><Link to='/components/Categories'>Категории</Link></li>
                        <li className='item'><Link to='/components/Recipes'>Рецепты</Link></li>
                        <li className='item'><Link to='/components/OpenAPI'>OpenAPI</Link></li>
                        
                    </ul>
                </nav>
            </header>
           
        </div>
    )
}


export default Header;