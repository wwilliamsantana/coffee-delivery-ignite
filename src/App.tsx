import { Heading } from "./components/Heading"
import { ListCoffees } from "./components/ListCoffees"
import { Navbar } from "./components/Navbar"
import "./styles/main.css"

export function App() {
  return (
    <div>
      <Navbar />
      <Heading />
      <ListCoffees />
    </div>
  )
}
