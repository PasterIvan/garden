import React from 'react';
import './App.css';
import {General} from "./general/General";
import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./components/c1-Main/Main";

export const App = () => {
  return (
      <>
          <Routes>
              <Route path='/' element={<Navigate to={'/main'}/>}/>
              <Route path='/main' element={<Main/>}/>
              <Route path='/general/*' element={<General/>}/>
              <Route path='404' element={<h1>404: PAGE NOT FOUND</h1>}/>
              <Route path='*' element={<Navigate to={"404"}/>}/>
          </Routes>
      </>
  );
}
