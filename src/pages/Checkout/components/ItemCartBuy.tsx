import { Minus, Plus, Trash } from "phosphor-react";
import * as Separator from '@radix-ui/react-separator';
import { useContext, useState } from "react";
import { CycleContext } from "../../../context/ShopCycle";
import { CoffeesProps } from "../../../context/Coffees";


interface ItemCartBuyProps {
  cardItem: CoffeesProps
  qtd: number
}


export function ItemCartBuy({ cardItem, qtd }: ItemCartBuyProps) {
  const { removeCartBuy, buttonAttQtd } = useContext(CycleContext)
  const [qtdCoffee, setQtdCoffee] = useState(qtd)

  function handleButtonQtdCoffeeAdd() {
    setQtdCoffee(state => state + 1)

    buttonAttQtd({ cardItem, qtd: qtdCoffee + 1 })

  }

  function handleButtonQtdCoffeeRemove() {
    setQtdCoffee(state => {
      if (qtdCoffee === 0) {
        return state
      } else {
        return state - 1
      }
    })

    buttonAttQtd({ cardItem, qtd: qtdCoffee - 1 })
  }

  function handleRemoveCartBuy() {
    removeCartBuy(cardItem)
  }

  return (
    <>
      <div className="flex items-start justify-between">
        <img className="w-16 h-16 mr-5" src={cardItem.imageSRC} alt="" />
        <div className="flex flex-col items-start gap-2 flex-1">
          <span>{cardItem.title}</span>

          <div className="flex items-center gap-2">

            <div className="bg-base-button px-2 py-[0.15rem] flex items-center gap-1 rounded-md ">
              <button
                onClick={handleButtonQtdCoffeeRemove}
                className="text-purple hover:text-purple-dark">
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
              onClick={handleRemoveCartBuy}
              className="bg-base-button hover:bg-base-hover px-2 py-[0.407rem] flex items-center gap-1 rounded-md "
            >

              <Trash weight={"regular"} className="text-purple" />

              <span className="uppercase text-base-text text-xs">Remover</span>

            </button>

          </div>
        </div>
        <span className="text-base-text text-base font-bold">{cardItem.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
      </div>
      <Separator.Root className="border border-base-button my-6" />
    </>
  )
}