import Nav from "../component/Nav"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default MainLayout