import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Footer from './components/Footer/footer';
import Profile from './components/Profile/profile';

const App = () => {
  return (
    <div className="grid-container-page">
      <Header/>
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
 