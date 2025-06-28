import React from "react"
import ReactDOM from "react-dom/client"
import Header from "/src/components/Header"
import Body from "/src/components/Body"
import Footer from "/src/components/Footer"
import Banner from "/src/components/Banner"

const AppLayout = ()=> {
  return(
    <div className="app">
      <Header/>
      <Banner/>
      <Body/>
      <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout/>)

