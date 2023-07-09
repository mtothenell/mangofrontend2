import '../Styles/Home.css';
import React, {Component} from "react";

class Home extends Component {

    // In class components, render() does not take any arguments. It simply returns JSX code, to specify what React elements to render.
    // In a function component, like function Helloworld() { return () } you dont ned the render() method.
    render() {

        return (
            <div className="home">
                <h2>Mango padel home</h2>
            </div>
        )
    }
}

export default Home;
