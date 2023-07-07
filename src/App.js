import './App.css';
import MemberTable from "./Components/MemberTable";
import * as Api from "./Api/Api";
import {useEffect, useState} from "react";

function App() {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        Api.getTime()
            .then(data => {
                setMembers(data);
            })
    }, [])

    console.log(members);

    return (
        <>
            <div className="jumbotron text-center">
                <div className="container">
                    <h1>Mango padel</h1>
                    <p>En community för oss som älskar padel!</p>
                </div>
            </div>

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Mango</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Medlemmar</a></li>
                            <li><a href="#">Padelnytt</a></li>
                            <li><a href="#">Turneringar</a></li>
                            <li><a href="#">Padelresa</a></li>
                            <li><a href="#">Matchi</a></li>
                            <li><a href="#">Webshop</a></li>
                            <li><a href="#">Om oss</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Medlemmar</h2>
                        <MemberTable/>
                    </div>
                    <div>
                        {members.map((item, index) => (
                            <div key={index}>
                                <p>Time: {item.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="jumbotron text-center jumbotron-bottom">
                <div className="container">
                    <h1>Under konstruktion...</h1>
                    <p>Just nu inte anpassad för mobilvy!</p>
                </div>
            </div>
        </>
    );
}

export default App;
