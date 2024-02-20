import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import "./App.css"
import Createpost from "./components/Createpost"
import Postlist from "./components/Postlist"
import Postlistprovider from "./store/post-list-store"

function App() {
  
  const [selectedtab,setselectedtab] =useState("Home");



  return (
    <Postlistprovider>
    <div className="app-container">
    <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab}></Sidebar>
    <div className="content">
    <Header></Header>
    {selectedtab === 'Home' ? <Postlist></Postlist> : <Createpost></Createpost>}
    
    
    <Footer></Footer>
    </div>
    </div>
   
    </Postlistprovider>
    
  );
    
}

export default App
