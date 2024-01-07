import React from "react"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Info from "./components/Info.js"
import Footer from "./components/Footer.js"




export default function App(){
    return (
        <div className="container">
            <Info />
            <main className="main">
                <About />
                <Interests />   
            </main>
            <Footer />
        </div>
    )
}