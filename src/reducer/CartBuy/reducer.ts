import { produce } from "immer"
import { CoffeesProps } from "../../context/Coffees"
import { ActionTypeProps, ActionTypes } from "./action"

export interface CartBuyCycleState {
  cardItem: CoffeesProps
  qtd: number
}

export interface DataClientState {
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


export function CartBuyReducer(state: CartBuy, action: ActionTypeProps) {

  switch (action.type) {
    case ActionTypes.ADD_CART_BUY: {
      return produce(state, (draft) => {
        draft.cartBuy.push(action.payload.cardItem)
      })
    }
    case ActionTypes.REMOVE_CART_BUY: {
      return produce(state, (draft) => {
        draft.cartBuy = draft.cartBuy.filter(item => item.cardItem.id !== action.payload.cardItem.cardItem.id)
      })
    }
    case ActionTypes.BUTTON_ADD_QTD: {
      const currentIndex = state.cartBuy.findIndex(item => item.cardItem.id === action.payload.cardItem.cardItem.id)

      if (currentIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cartBuy[currentIndex].qtd = action.payload.cardItem.qtd
      })
    }
    case ActionTypes.DATA_CLIENT_GET: {
      return produce(state, (draft) => {
        draft.dataClient = action.payload.data
        draft.cartBuy = []
      })
    }
    default:
      return state
  }
}