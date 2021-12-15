import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hola mundo</h1>
      <Profile />
      <Favorites />
      <Footer />
    </div>
  );
}

export default App;

