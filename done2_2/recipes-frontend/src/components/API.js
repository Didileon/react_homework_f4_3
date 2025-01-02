import React from 'react';


function OpenAPI() {

    return (
        <div>
            <section className='api'>
                <h1>OpenAPI</h1>

            </section>

            <section className='api1'>
<p>Все рецепты с нашего сайта вы можете увидеть <a href="http://127.0.0.1:8000/api/recipes/">ТУТ</a></p>

<p>Рецепты по категориям представлены <a href="http://127.0.0.1:8000/api/categories/1/">ТУТ</a>.</p>
</section>
<section className='api2'><p>Не забывайте менять в конце цифры, чтобы переходить на необходимую категорию блюд.</p>
<p>Категории начинаются с номера 1 и т.д.</p></section>

<section className='api3'><p>Все категории можно посмотреть <a href="http://127.0.0.1:8000/recipes/categories/">ТУТ</a>.</p></section>
        </div>
    )
}

export default OpenAPI;