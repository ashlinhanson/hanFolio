import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";

function App() {
   
    <Router>
        <div>
            <Header />
                <Route exact path="/" component={ About } />
                <Route exact path="/about" component={ About } />
                <Route exact path="/portfolio" component={ Portfolio } />
                <Route exact path="/contact" component={ Contact } />
            <Footer />
        </div>
    </Router>
    

} 

export default App;