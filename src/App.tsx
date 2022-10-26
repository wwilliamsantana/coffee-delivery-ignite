import { BrowserRouter } from "react-router-dom"
import { CycleContextProvider } from "./context/ShopCycle"
import { Router } from "./Router"
import "./styles/main.css"

export function App() {
  return (
    <BrowserRouter>
      <CycleContextProvider>
        <Router />
      </CycleContextProvider>

    </BrowserRouter>
  )
}
