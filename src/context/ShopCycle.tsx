import { createContext, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom"
import { coffeesList, CoffeesProps } from "./Coffees"




interface ShopCycleType {
  coffeesList: CoffeesProps[]
  cartBuyCycle: CartBuyCycleState[]
  dataClient: DataClientState | undefined
  addCartBuy: (cardItem: CartBuyCycleState) => void
  removeCartBuy: (cardItem: CoffeesProps) => void
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

export function CycleContextProvider({ children }: CycleContextProps) {

  const [cartBuyCycle, setCartBuyCycle] = useState<CartBuyCycleState[]>([])
  const [dataClient, setDataClient] = useState<DataClientState>()
  const navigate = useNavigate()

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

  function dataClientGet(data: DataClientState) {
    setDataClient(data)
    setCartBuyCycle([])
    navigate("/checkout/success")
  }

  return (
    <CycleContext.Provider
      value={{ coffeesList, addCartBuy, cartBuyCycle, removeCartBuy, buttonAttQtd, dataClientGet, dataClient }}
    >
      {children}
    </CycleContext.Provider>
  )
}