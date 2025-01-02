import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Recipes from './components/Recipes';
import Salats from './components/Salats';
import Soups from './components/Soups';
import Desserts from './components/Desserts';
import OpenAPI from './components/API';



	
function App() {

	return (
	        <>

            <div className='App'>
                <div>
                    <Header />



                    <Routes>
                        <Route exact path='/Main' element={<Main />} />
                        <Route path='/components/Categories' element={<Categories />} />
                        <Route exact path='/components/Recipes' element={<Recipes />} />
                        <Route exact path='/components/OpenAPI' element={<OpenAPI />} />
                        <Route exact path='/salats' element={<Salats />} />
                        <Route exact path='/soups' element={<Soups />} />
                        <Route exact path='/desserts' element={<Desserts />} />
                    </Routes>
                </div>


                        <Footer />
                </div>
            </>


	)
}

export default App;
