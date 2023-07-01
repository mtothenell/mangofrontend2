import './App.css';
import HamburgerMenu from "./Components/HamburgerMenu";

function App() {
    return (
        <>
            <div className="top"></div>
            <div className="flex-container">

                <div className="menu">
                    <HamburgerMenu/>
                </div>
                <div className="right"></div>
            </div>
            <div className="bottom"></div>

        </>
    );
}

export default App;
