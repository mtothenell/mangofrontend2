import React, { useState, useEffect } from "react";
import Header from "../src/Components/Header/Header";

function App() {
    const [width, setWindowWidth] = useState(0);

    // componentDidMount...runs only once
    useEffect( () => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    const responsive = {
        showTopNavMenu: width > 1023
    }

    return (
        <>
            <Header showTopNavMenu={responsive.showTopNavMenu}/>
        </>
    );
}

export default App;

