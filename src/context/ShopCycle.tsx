import { createContext, ReactNode, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import { coffeesList, CoffeesProps } from "./Coffees"
import { produce } from "immer"



interface ShopCycleType {
  coffeesList: CoffeesProps[]
  cartBuyCycle: CartBuyCycleState[]
  dataClient: DataClientState | undefined
  addCartBuy: (cardItem: CartBuyCycleState) => void
  removeCartBuy: (cardItem: CoffeesProps) => void
  buttonAttQtd: (cardItem: CartBuyCycleState) => void
  // dataClientGet: (data: any) => void

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

export function CycleContextProvider({ children }: CycleContextProps) {

  const [cartBuyCycle, dispatch] = useReducer((state: CartBuyCycleState[], action: any) => {

    if (action.type === "ADD_CART_BUY") {
      return produce(state, (draft) => {
        draft.push(action.payload.cardItem)
      })

    }

    if (action.type === "REMOVE_CART_BUY") {
      return produce(state, (draft) => {
        return draft.filter(item => item.cardItem.id !== action.payload.cardItem.id)
      })

    }

    if (action.type === "BUTTON_ADD_QTD") {
      const currentIndex = state.findIndex(item => item.cardItem.id === action.payload.cardItem.cardItem.id)

      if (currentIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft[currentIndex].qtd = action.payload.cardItem.qtd
      })
    }

    return state
  }, [])


  const [dataClient, setDataClient] = useState<DataClientState>()
  const navigate = useNavigate()

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

  function buttonAttQtd(cardItem: CartBuyCycleState) {

    dispatch({
      type: "BUTTON_ADD_QTD",
      payload: {
        cardItem
      }
    })

  }

  // function dataClientGet(data: DataClientState) {
  //   setDataClient(data)
  //   setCartBuyCycle([])
  //   navigate("/checkout/success")
  // }

  return (
    <CycleContext.Provider
      value={{ coffeesList, addCartBuy, cartBuyCycle, removeCartBuy, buttonAttQtd,/* dataClientGet,*/ dataClient }}
    >
      {children}
    </CycleContext.Provider>
  )
}