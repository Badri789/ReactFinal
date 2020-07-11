import React from "react";
import Navbar from "../navbar/navabar";
import { Route } from "react-router-dom";
import Register from "../register/register";
import Posts from "../posts/posts";
import Photos from "../photos/photos";
import MainPage from "../../pages/main-page";

const App = () => {
    return (
        <div>
            <Navbar />
            <Route path="/" component={MainPage} exact/>
            <Route path="/authorize" component={Register}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/photos" component={Photos}/>
        </div>
    );
}

export default App;


