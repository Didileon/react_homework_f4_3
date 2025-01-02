// import React from 'react';

// const RecipeDetail = () => {

//     return (
//         <div>
//             <h4>Рецепты подробно</h4>

//         </div>
//     )
// }

// export default RecipeDetail;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const RecipePage = () => {
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { id } = useParams();  // Получаем ID рецепта из URL

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         setLoading(true);
//         // Делаем запрос по новому эндпоинту, который возвращает конкретный рецепт
//         const response = await axios.get(`http://localhost:8000/api/recipes/${id}/`);
//         setRecipe(response.data);  // Сохраняем данные рецепта в стейт
//       } catch (err) {
//         setError(err.message);  // Если ошибка - сохраняем её
//       } finally {
//         setLoading(false);  // Завершаем загрузку
//       }
//     };

//     fetchRecipe();  // Вызываем функцию загрузки рецепта
//   }, [id]);  // Следим за изменением ID рецепта в URL

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (recipe) {
//     return (
//       <div>
//         <h1>{recipe.name}</h1>
//         <p>{recipe.description}</p>
//         <ul>
//           {recipe.ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//         </ul>
//         <p>{recipe.instructions}</p>
//       </div>
//     );
//   }

//   return <div>Recipe not found.</div>;
// };

// export default RecipePage;


import React from 'react';


const Recipe = ({ recipe }) => (
  <li>
    <h2>{recipe.title}</h2>
    <p>{recipe.description}</p>
    <p>Категория: {recipe.category}</p>
  </li>
);

export default RecipeDetail;