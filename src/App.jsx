import About from "./Components/About"
import Home from "./Components/Home"
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar"
import Project from "./Components/Project"
import { Route, Routes } from "react-router-dom";

function App() {
 return (
<Routes>
 <Route path="/" element={<Layout/>}/>
</Routes>
  )
}

export default App
