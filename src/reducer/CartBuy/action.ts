import { CartBuyCycleState, DataClientState } from "./reducer";


export enum ActionTypes {
  ADD_CART_BUY = "ADD_CART_BUY",
  REMOVE_CART_BUY = "REMOVE_CART_BUY",
  BUTTON_ADD_QTD = "BUTTON_ADD_QTD",
  DATA_CLIENT_GET = "DATA_CLIENT_GET"
}


interface addCartBuyProps {
  type: ActionTypes.ADD_CART_BUY
  payload: { cardItem: CartBuyCycleState }
}

interface removeCartBuyProps {
  type: ActionTypes.REMOVE_CART_BUY
  payload: { cardItem: CartBuyCycleState }
}

interface buttonRemoveQtdProps {
  type: ActionTypes.BUTTON_ADD_QTD
  payload: { cardItem: CartBuyCycleState }
}

interface dataClientGetPorps {
  type: ActionTypes.DATA_CLIENT_GET
  payload: { data: DataClientState }
}

export type ActionTypeProps = addCartBuyProps | removeCartBuyProps | buttonRemoveQtdProps | dataClientGetPorps

export function addCartBuyAction(cardItem: CartBuyCycleState): addCartBuyProps {
  return {
    type: ActionTypes.ADD_CART_BUY,
    payload: {
      cardItem
    }
  }
}

export function removeCartBuyAction(cardItem: CartBuyCycleState): removeCartBuyProps {
  return {
    type: ActionTypes.REMOVE_CART_BUY,
    payload: {
      cardItem
    }
  }
}


export function buttonAddQtdAction(cardItem: CartBuyCycleState): buttonRemoveQtdProps {
  return {
    type: ActionTypes.BUTTON_ADD_QTD,
    payload: {
      cardItem
    }
  }
}

export function dataClientGetAction(data: DataClientState): dataClientGetPorps {
  return {
    type: ActionTypes.DATA_CLIENT_GET,
    payload: {
      data
    }
  }
}