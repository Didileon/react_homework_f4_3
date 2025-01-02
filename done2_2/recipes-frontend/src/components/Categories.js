import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/recipes/categories/") // Убедитесь, что ваш сервер Django запущен
            .then(res => {
                console.log(res.data);
                setCategories(res.data); // Здесь просто используем полученные данные
            })
            .catch(error => {
                console.error("Error fetching the categories", error);
            });
    }, []);

    return (
        <>
            <div>


                    <h3>
                        <nav className='nav1'>
                            <ul>
                                <li className='item'><Link to='/salats'>Салаты</Link></li>
                                <li className='item'><Link to='/soups'>Супы</Link></li>
                                <li className='item'><Link to='/desserts'>Десерты</Link></li>
                            </ul>
                        </nav>
                    </h3>


            </div>

            <div>
                <section className='categories'>
                    <h1>Категории</h1>
                </section>
                <ul>

                    {categories.map(category => (
                        <li key={category.pk}>
                            <p>{category.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}


export default Categories;