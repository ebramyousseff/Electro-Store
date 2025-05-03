import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import ApoveFooter from "../apoveFooter/ApoveFooter"
import Mode from "../mode/Mode"

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Mode/>
        <ScrollRestoration/>
        <ApoveFooter/>
        <Footer/>
    </div>
  )
}

export default Layout