import {  Routes, Route, Navigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Home from "../Components/Home"
import About from "../Components/About"
import Error404 from "../Components/Error404"
import Blog from "../Components/Blog"
import Single from "../Components/Single"
const Routing = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path='/error404 ' element={<Error404/>}/>
            <Route path="/single/:id" element={<Single/>}/>
            <Route path="*" element={<Navigate to='error404' />} />
        </Routes>
    <Footer/>
    </>
  )
}

export default Routing