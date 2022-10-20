import logo from "../assets/Logo.svg"
import { ShoppingCart, MapPin } from "phosphor-react"

export function Navbar() {
  return (
    <div className="max-w-[70rem] mx-auto py-8 flex justify-between items-center">


      <img className="h-[40px]" src={logo} alt="" />

      <div className="flex items-center gap-3">

        <div className="flex items-center p-2 gap-1 rounded-md text-purple-dark text-sm bg-purple-light">
          <MapPin size={22} weight="fill" />
          <div >Porto Alegre, RS</div>
        </div>

        <a className="p-2 bg-yellow-light text-yellow-dark rounded-md">
          <ShoppingCart size={22} weight="fill" />
        </a>

      </div>



    </div>
  )
}