import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

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
           <div>
               <Header
               currentPage={this.state.curentPage}
               handlePageChange={this.handlePageChange}
               />
               {this.renderPage()}
           </div>
       )
   }

}

export default PortfolioContainer;