
import * as Api from "./Api/Api";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Members from "./Pages/Members";
import Home from "./Pages/Home";
import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";

function App() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        Api.getTime()
            .then(data => {
                setMembers(data);
            })
    }, [])

    return (
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/members" element={<Members members={members}/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
