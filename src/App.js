import './App.css';
import Header from "./Companents/Header/Header";
import Navbar from "./Companents/Navbar/Navbar";
import Profile from "./Companents/Profile/Profile";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Companents/Navbar/News";
import Music from "./Companents/Navbar/Music";
import Dialog from "./Companents/Dialog/Dialog";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content-content'>
                    <Routes>
                        <Route path="/dialogs*" element={<Dialog state={props.state.dialogPage}/> }/>
                        <Route path="/profile" element={<Profile state={props.state.profilePage}/> }/>

                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    )
}
export default App;










