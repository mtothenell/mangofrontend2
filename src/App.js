import './App.css';
import MemberTable from "./Components/MemberTable";

function App() {
    return (
        <>
            <div className="jumbotron text-center" style={{ backgroundColor: '#82CD47', minHeight: '30vh', border: 0, margin: 0 }}>
                <div className="container">
                    <h1>Mango padel</h1>
                    <p>En community för dem som älskar padel!</p>
                </div>
            </div>

            <nav className="navbar navbar-inverse" style={{ height: '5vh', border: 0, margin: 0 }}>
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
                            <li><a href="#">Om oss</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid" style={{ backgroundColor: '#F0FF42', minHeight: '30vh', margin: 0 }}>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Medlemmar</h2>
                        <MemberTable />
                    </div>
                </div>
            </div>

            <div className="jumbotron text-center" style={{ marginBottom: 0, backgroundColor: "#379237", minHeight: '30vh', margin: 0 }}>
                <div className="container">
                    <h1>Reklamplats</h1>
                    <p>Gör reklam för ditt företag här!</p>
                </div>
            </div>
        </>
    );
}

export default App;
