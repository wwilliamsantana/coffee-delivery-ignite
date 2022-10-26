import logo from "../assets/Logo.svg"
import { NavLink } from "react-router-dom"
import { ShoppingCart, MapPin } from "phosphor-react"
import { useContext } from "react"
import { CycleContext } from "../context/ShopCycle"

export function Navbar() {
  const { qtdCartBuy } = useContext(CycleContext)

  return (
    <div className="max-w-[70rem] mx-auto py-8 flex justify-between items-center">

      <NavLink to={"/"}>
        <img className="h-[40px]" src={logo} alt="" />
      </NavLink>


      <div className="flex items-center gap-3">

        <div className="flex items-center p-2 gap-1 rounded-md text-purple-dark text-sm bg-purple-light">
          <MapPin size={22} weight="fill" />
          <div >Porto Alegre, RS</div>
        </div>


        <NavLink to={"/checkout"} className="relative">
          <button className="p-2 bg-yellow-light text-yellow-dark rounded-md ">
            <ShoppingCart size={22} weight="fill" />
          </button>

          {qtdCartBuy === 0 ? " "
            :
            <div className="absolute -top-2 -right-2 ">
              <div className=" w-5 h-5 rounded-full bg-yellow-dark text-white text-center pt-0.5 text-xs">
                {qtdCartBuy}
              </div>
            </div>}


        </NavLink>

      </div>
    </div>
  )
}