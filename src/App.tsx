import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./components/c2-Body/b1-Main/Main";
import style from "./App.module.css"
import {Header} from "./components/c1-Header/Header";
import {AboutUs} from "./components/c2-Body/b2-AboutUs/AboutUs";
import {Concurs} from "./components/c2-Body/b3-Concurs/Concurs";
import {AboutFestival} from "./components/c2-Body/b4-AboutFestival/AboutFestival";
import {Footer} from "./components/c3-Footer/Footer";
import {Contacts} from "./components/c2-Body/b5-Contacts/Contacts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {setIsInitializedAC} from './bll/appReducer';
import {CircularProgress} from "@mui/material";

export const App = () => {

    const dispatch = useDispatch()

    const isInitialized = useSelector<AppStateType, boolean>((state) => state.app.isInitialized)

    useEffect(() => {
        dispatch(setIsInitializedAC(true))
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress color="success"/>
        </div>
    }

    return (
        <div className={style.App}>
            <Header/>
            <Routes>
                <Route path='/' element={<Navigate to={'/main'}/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/about_us' element={<AboutUs/>}/>
                <Route path='/concurs' element={<Concurs/>}/>
                <Route path='/about_festival' element={<AboutFestival/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='404' element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path='*' element={<Navigate to={"404"}/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

