import './App.css';

function App() {
    return (

        <>


            <div className="jumbotron text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#">Page 2</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>About Me</h2>
                        <h5>Photo of me:</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        <h3>Some Links</h3>
                        <p>Lorem ipsum dolor sit ame.</p>
                        <ul className="nav nav-pills nav-stacked">
                            <li className="active"><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-8">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco.</p>
                            <h2>TITLE HEADING</h2>
                            <h5>Title description, Sep 2, 2017</h5>
                            <div className="fakeimg">Fake Image</div>
                            <p>Some text..</p>
                    </div>
                </div>
            </div>

            <div className="jumbotron text-center" style={{ marginBottom: 0 }}>
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>

        </>

    )
        ;
}

//    <HamburgerMenu/>
//    <p>Mango padel - En community för alla som älskar padel</p>
//    <MemberTable/>


export default App;
