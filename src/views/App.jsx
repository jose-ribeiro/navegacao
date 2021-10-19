import React from "react";
import Content from "../componentes/layout/Content";
import Menu from "../componentes/layout/Menu";
import "./App.css"
import {BrowserRouter as Router} from "react-router-dom";


const App = props =>(
    <div className="App">
        <Router>
             <Menu />
             <Content/>
        </Router>

    </div>
)
export default App