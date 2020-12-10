import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import "../components/pages/styles/index.css";

class PortfolioContainer extends Component {

   state = {
       currentPage : "About"
   };

   handlePageChange = page => {
       this.setState({ currentPage: page });
   };

   renderPage = () => {
       if (this.state.currentPage === "About") {
           return <About />;
       } else if (this.state.currentPage === "Portfolio") {
           return <Portfolio />;
       } else if (this.state.currentPage === "Contact") {
           return <Contact />;
       }
   };

   render() {
       return (
        <Router>
           <div>
               <Header/>
               <Route exact path="/" component={About}/>
               <Route exact path="/about" component={About}/>
               <Route exact path="/portfolio" component={Portfolio}/>
               <Route exact path="/contact" component={Contact}/>
               <Footer/>
           </div>
        </Router>
       )
   }

}

export default PortfolioContainer;