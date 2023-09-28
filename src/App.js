import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import FamilyPage from './pages/FamilyPage';
import SkatePage from './pages/SkatePage';
import SurfPage from './pages/SurfPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={MainPage}/>
          <Route path='/classic' Component={FamilyPage}/>
          <Route path='/skate' Component={SkatePage}/>
          <Route path='/surf' Component={SurfPage}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
