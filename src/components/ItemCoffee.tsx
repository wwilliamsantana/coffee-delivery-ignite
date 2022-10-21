import { Minus, Plus, ShoppingCart } from "phosphor-react";
import image1 from "../assets/coffees/Image.svg"

export function ItemCoffee() {
  return (
    <div className="w-64 h-[19.375rem]  rounded-md bg-base-card rounded-tr-[2.25rem] rounded-bl-[2.25rem] flex flex-col items-center  ">

      <img className="w-[7.5rem] h-[7.5rem]  -mt-8 " src={image1} alt="" />

      <div className="flex items-center gap-1 mt-3">
        <div className="bg-yellow-light text-yellow-dark py-1 px-2 rounded-full 
            text-[0.625rem] font-bold leading-[0.8125rem] uppercase">
          Tradicional
        </div>
      </div>

      <span className="text-xl text-base-subtitle font-baloo font-bold mt-4">Expresso Tradicional</span>

      <span className="text-sm leading-[1.1375rem] text-base-label text-center px-5 mt-2">O tradicional café feito com água quente e grãos moídos</span>


      <div className="mt-8 flex items-center gap-[1.450rem] px-6 mb-5">

        <div className="text-sm text-base-text ">
          R$ <span className="font-baloo font-extrabold text-2xl">9,90</span>
        </div>

        <div className="flex items-center  gap-2">

          <div className="bg-base-button p-2 flex items-center gap-2 rounded-md ">

            <button className="text-purple">
              <Minus size={14} weight={"bold"} />
            </button>

            <span>
              2
            </span>

            <button className="text-purple">
              <Plus size={14} weight={"bold"} />
            </button>


          </div>

          <button className="p-2 bg-purple-dark text-white rounded-md ">
            <ShoppingCart size={22} weight="fill" />
          </button>

        </div>

      </div>



    </div>
  )
}