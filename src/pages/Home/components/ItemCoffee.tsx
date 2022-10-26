import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { createContext, useContext, useReducer, useState } from "react";
import { CoffeesProps } from "../../../context/Coffees";
import { CycleContext } from "../../../context/ShopCycle";
import { DetailCoffee } from "./DetailCoffee";

interface ItemsCardCoffee {
  cardItem: CoffeesProps
}



export function ItemCoffee({ cardItem }: ItemsCardCoffee) {
  const { addCartBuy } = useContext(CycleContext)
  const [qtdCoffee, setQtdCoffee] = useState(0)

  function handleButtonQtdCoffeeAdd() {
    setQtdCoffee(state => state + 1)
  }

  function handleButtonQtdCoffeeRemove() {
    setQtdCoffee(state => {
      if (qtdCoffee === 0) {
        return state
      } else {
        return state - 1
      }
    })
  }

  function handleButtonAddCartBuy() {
    const cartBuy = {
      cardItem,
      qtd: qtdCoffee
    }

    addCartBuy(cartBuy)
    setQtdCoffee(0)

  }

  return (

    <main className="w-64 h-[19.375rem] flex-1 rounded-md bg-base-card rounded-tr-[2.25rem] rounded-bl-[2.25rem] flex flex-col items-center  ">

      <img className="w-[7.5rem] h-[7.5rem]  -mt-8 " src={cardItem.imageSRC} alt="" />

      <div className="flex items-center gap-1 mt-3">

        {cardItem.detail.map((item, index) => <DetailCoffee key={index} type={item} />)}


      </div>

      <span className="text-xl text-base-subtitle font-baloo font-bold mt-4">{cardItem.title}</span>

      <span className="text-sm leading-[1.1375rem] text-base-label text-center px-5 mt-2">{cardItem.subtitle}</span>


      <div className="mt-8 flex items-center gap-[1.450rem] px-6 mb-5">

        <div className="text-sm text-base-text ">
          <span className="font-baloo font-extrabold text-2xl">{cardItem.value.toLocaleString("pt-br", { style: "currency", currency: "BRl" })}</span>
        </div>

        <div className="flex items-center  gap-2">

          <div className="bg-base-button p-2 flex items-center gap-2 rounded-md ">

            <button
              onClick={handleButtonQtdCoffeeRemove}
              className="text-purple hover:text-purple-dark"
            >
              <Minus size={14} weight={"bold"} />
            </button>

            <span>
              {qtdCoffee}
            </span>

            <button
              onClick={handleButtonQtdCoffeeAdd}
              className="text-purple hover:text-purple-dark"
            >
              <Plus size={14} weight={"bold"} />
            </button>

          </div>

          <button
            onClick={handleButtonAddCartBuy}
            className="p-2 bg-purple-dark text-white rounded-md hover:bg-purple"
          >
            <ShoppingCart size={22} weight="fill" />
          </button>

        </div>

      </div>



    </main>

  )
}