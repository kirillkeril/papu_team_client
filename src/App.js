import { LoginPage } from "./pages/loginPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, {useContext, useEffect} from "react";
import {MainPage} from "./pages/MainPage/MainPage";
import {ProductPage} from "./pages/ProductPage/ProductPage";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
const App = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        if(localStorage.getItem('token')){
            store.checkAuth();
        }
    }, []);

    return (
        // <div className="App">
        //   <LoginPage />
        // </div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/product" element={<ProductPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default observer(App);
