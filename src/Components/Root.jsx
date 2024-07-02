import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Root = () => {
  return (
    <div>
        <Outlet></Outlet>
        <Navbar></Navbar>
        <Footer></Footer>
    </div>
  )
}

export default Root
