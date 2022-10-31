import { createContext, ReactNode, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import { coffeesList, CoffeesProps } from "./Coffees"
import { produce } from "immer"



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

interface CartBuyCycleState {
  cardItem: CoffeesProps
  qtd: number
}

interface DataClientState {
  street: string
  zip: number
  numberHome: number
  district: string
  complement?: string
  city: string
  uf: string
  paymentType: string
}

interface CartBuy {
  cartBuy: CartBuyCycleState[]
  dataClient: DataClientState | undefined
}

export function CycleContextProvider({ children }: CycleContextProps) {

  const [cartBuyState, dispatch] = useReducer((state: CartBuy, action: any) => {

    if (action.type === "ADD_CART_BUY") {
      return produce(state, (draft) => {
        draft.cartBuy.push(action.payload.cardItem)
      })
    }

    if (action.type === "REMOVE_CART_BUY") {

      return produce(state, (draft) => {
        draft.cartBuy = draft.cartBuy.filter(item => item.cardItem.id !== action.payload.cardItem.cardItem.id)
      })
    }


    if (action.type === "BUTTON_ADD_QTD") {
      const currentIndex = state.cartBuy.findIndex(item => item.cardItem.id === action.payload.cardItem.cardItem.id)

      if (currentIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cartBuy[currentIndex].qtd = action.payload.cardItem.qtd
      })
    }

    if (action.type === "DATA_CLIENT_GET") {
      return produce(state, (draft) => {
        draft.dataClient = action.payload.data
        draft.cartBuy = []
      })
    }

    return state
  },
    {
      cartBuy: [],
      dataClient: undefined
    }
  )

  const { cartBuy, dataClient } = cartBuyState

  const navigate = useNavigate()

  function addCartBuy(cardItem: CartBuyCycleState) {

    dispatch({
      type: "ADD_CART_BUY",
      payload: {
        cardItem
      }
    })
  }

  function removeCartBuy(cardItem: CartBuyCycleState) {

    dispatch({
      type: "REMOVE_CART_BUY",
      payload: {
        cardItem
      }
    })
  }

  function buttonAttQtd(cardItem: CartBuyCycleState) {

    dispatch({
      type: "BUTTON_ADD_QTD",
      payload: {
        cardItem
      }
    })

  }

  function dataClientGet(data: DataClientState) {
    dispatch({
      type: "DATA_CLIENT_GET",
      payload: {
        data
      }
    })
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