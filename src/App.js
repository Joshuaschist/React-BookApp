import './App.css';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList/>}/>
        <Route path="/books/:id" element={<BookDetails/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

