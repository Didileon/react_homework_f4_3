import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/recipes/") // Убедитесь, что ваш сервер Django запущен
            .then(res => {
                console.log(res.data);
                setRecipes(res.data); // Здесь просто используем полученные данные
            })
            .catch(error => {
                console.error("Error fetching the recipes: ", error);
            });
    }, []);

    return (
        <div>
            <section className='recipes'>
                <h1>Рецепты</h1>
            </section>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.pk}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        <p>Категория: {recipe.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Recipes;


