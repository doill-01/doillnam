import Navbar from "./component/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Portfolio1 from "./component/Portfolio1";
import ToDoList from "./component/ToDoList";



const App = () => {
  return (
	<>
	<Navbar/>
	<Routes>
	<Route exact path="/" element={<Home/>}/>
	<Route exact path="about" element={<About/>}/>
	<Route exact path="/skills" element={<Skills/>}/>
	<Route exact path="/skills" element={<Skills/>}/>
	<Route exact path="/project" element={<Project/>}/>
	<Route exact path="/Portfolio1" element={<Portfolio1/>}/>
	<Route exact path="/ToDoList" element={<ToDoList/>}/>
	<Route exact path="/Contact" element={<Contact/>}/>
  </Routes>
  </>

	 
  );
};

export default App;
