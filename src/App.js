import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Footer from './components/Footer/footer';
import Profile from './components/Profile/profile';
import Friends from './components/Friends/friends';
import Dialogs from './components/Dialogs/dialogs';
import News from "./components/News/news";
import Images from "./components/Images/images";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="content_wrapper">
                    <Route path='/profile' component={Profile} />
                    <Route path='/friends' component={Friends} />
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/news' component={News} />
                    <Route path='/images' component={Images} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
 