import React from 'react';
import './App.css';

function App() {

    return (
        <>
            <div className="page">
                <main className="content">
                    <article>
                        <p>
                            This is an article of content that sits inline with a sidebar. Resize the
                            browser to see how when there’s no enough room, the sidebar will stack on to a
                            new line.
                        </p>
                    </article>
                </main>
                <aside className="sidebar">
                    <p>This sidebar will stack where there is not enough room.</p>
                </aside>
            </div>
        </>
    );
}

export default App;
