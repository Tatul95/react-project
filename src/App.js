import React, { Component } from "react";
import Header from "./components/header/header";
import Box from "./components/boxes";
import Footer from "./components/footer/footer";

class App extends React.Component{

    render() {
        return <div>
            <Header/>
            <Box/>
            <Footer/>
        </div> 
    }

}

export default App

