import { Navbar } from "../../components/Navbar";
import { Outlet } from "react-router-dom"


export function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}