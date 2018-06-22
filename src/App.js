import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import sigma from './sigma.min.js'
// import "./sigma.require.js"
// import './sigma.parsers.gexf.min'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React, Dude</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload, Dude.
                </p>
            </div>
        );
    }

    // render() {
    //     return (
    //         <html>
    //         <div id="sigma-container"/>
    //         <script src="sigma.min.js"/>
    //         <script src="sigma.parsers.gexf.min.js"/>
    //         <script>
    //             sigma.parsers.gexf(
    //             'les-miserables.gexf',
    //             { // Here is the ID of the DOM element that
    //                 // will contain the graph:
    //                 // container: 'sigma-container'
    //             },
    //             function(s) {
    //             // This function will be executed when the
    //             // graph is displayed, with "s" the related
    //             // sigma instance.
    //         }
    //             );
    //         </script>
    //         </html>
    //     );
    // }
}

export default App;
