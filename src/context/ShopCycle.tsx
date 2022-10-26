import { createContext, ReactNode, useReducer, useState } from "react"
import { coffeesList, CoffeesProps } from "./Coffees"



interface ShopCycleType {
  coffeesList: CoffeesProps[]

  cartBuyCycle: CartBuyCycleState[]
  addCartBuy: (cardItem: CartBuyCycleState) => void
  removeCartBuy: (cardItem: CoffeesProps) => void
  buttonAttQtd: (cardItem: CartBuyCycleState) => void

}

export const CycleContext = createContext({} as ShopCycleType)


interface CycleContextProps {
  children: ReactNode
}

interface CartBuyCycleState {
  cardItem: CoffeesProps
  qtd: number
}


export function CycleContextProvider({ children }: CycleContextProps) {

  const [cartBuyCycle, setCartBuyCycle] = useState<CartBuyCycleState[]>([])


  function addCartBuy(cardItem: CartBuyCycleState) {
    setCartBuyCycle(state => [...state, cardItem])
  }

  function removeCartBuy(cardItem: CoffeesProps) {
    setCartBuyCycle(state => state.filter(item => item.cardItem.id !== cardItem.id))
  }

  function buttonAttQtd(cardItem: CartBuyCycleState) {
    const newValue = cartBuyCycle.map(item => {
      if (item.cardItem.id === cardItem.cardItem.id) {
        item.qtd = cardItem.qtd
      } else {
        return item
      }
      return item
    })

    setCartBuyCycle(newValue)

  }

  console.log(cartBuyCycle)
  return (
    <CycleContext.Provider
      value={{ coffeesList, addCartBuy, cartBuyCycle, removeCartBuy, buttonAttQtd }}
    >
      {children}
    </CycleContext.Provider>
  )
}