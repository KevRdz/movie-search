import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Movies from './pages/Movies/Movies';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/movies" element={<Movies />}/>
      </Routes>
    </>
  );
}

export default App;
