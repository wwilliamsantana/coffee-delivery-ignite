import { createContext, ReactNode, useReducer, useState } from "react"
import { coffeesList, CoffeesProps } from "./Coffees"


interface ShopCycleType {
  coffeesList: CoffeesProps[]
  qtdCartBuy: number

  cartBuyCycle: CartBuyCycleState[]
  addCartBuy: (cardItem: CartBuyCycleState) => void
  removeCartBuy: (cardItem: CoffeesProps) => void


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

  const [cartBuyCycle, dispatch] = useReducer((state: CartBuyCycleState[], action: any) => {


    if (action.type === "ADD_CART_BUY") {
      return [...state, action.payload.cardItem]
    }
    if (action.type === "REMOVE_CART_BUY") {
      return state.filter(item => item.cardItem.id !== action.payload.cardItem.id)

    }
    return state
  }, [])



  function addCartBuy(cardItem: CartBuyCycleState) {
    dispatch({
      type: "ADD_CART_BUY",
      payload: {
        cardItem
      }
    })
  }

  function removeCartBuy(cardItem: CoffeesProps) {

    dispatch({
      type: "REMOVE_CART_BUY",
      payload: {
        cardItem
      }
    })

  }


  const qtdCartBuy = cartBuyCycle.reduce((acc, item) => acc + item.qtd, 0)





  return (
    <CycleContext.Provider
      value={{ coffeesList, addCartBuy, qtdCartBuy, cartBuyCycle, removeCartBuy }}
    >
      {children}
    </CycleContext.Provider>
  )
}