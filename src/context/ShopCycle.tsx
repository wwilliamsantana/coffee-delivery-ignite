import { createContext, ReactNode, useReducer } from "react"
import { useNavigate } from "react-router-dom"
import { coffeesList, CoffeesProps } from "./Coffees"
import { CartBuyCycleState, CartBuyReducer, DataClientState } from "../reducer/CartBuy/reducer"
import { addCartBuyAction, buttonAddQtdAction, dataClientGetAction, removeCartBuyAction } from "../reducer/CartBuy/action"


interface ShopCycleType {
  coffeesList: CoffeesProps[]
  cartBuy: CartBuyCycleState[]
  dataClient: DataClientState | undefined
  addCartBuy: (cardItem: CartBuyCycleState) => void
  removeCartBuy: (cardItem: CartBuyCycleState) => void
  buttonAttQtd: (cardItem: CartBuyCycleState) => void
  dataClientGet: (data: any) => void
}

export const CycleContext = createContext({} as ShopCycleType)


interface CycleContextProps {
  children: ReactNode
}


export function CycleContextProvider({ children }: CycleContextProps) {

  const [cartBuyState, dispatch] = useReducer(
    CartBuyReducer,
    {
      cartBuy: [],
      dataClient: undefined
    }
  )

  const { cartBuy, dataClient } = cartBuyState
  const navigate = useNavigate()

  function addCartBuy(cardItem: CartBuyCycleState) {
    dispatch(addCartBuyAction(cardItem))
  }

  function removeCartBuy(cardItem: CartBuyCycleState) {
    dispatch(removeCartBuyAction(cardItem))
  }

  function buttonAttQtd(cardItem: CartBuyCycleState) {
    dispatch(buttonAddQtdAction(cardItem))
  }

  function dataClientGet(data: DataClientState) {
    dispatch(dataClientGetAction(data))
    navigate("/checkout/success")
  }

  return (
    <CycleContext.Provider
      value={{ coffeesList, addCartBuy, cartBuy, removeCartBuy, buttonAttQtd, dataClientGet, dataClient }}
    >
      {children}
    </CycleContext.Provider>
  )
}