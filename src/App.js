import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import { Home} from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import {NotFound} from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
  return (
    <>
    <Router basename='/react_spa_food'>
      <Header/>
      <main className="container content" >
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contact/>} />
            <Route path="/category/:name" element={<Category/>} />
            <Route path="/recipe/:id" element={<Recipe/>} />
            <Route element={<NotFound/>}/>
          </Routes>
         
      </main>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
