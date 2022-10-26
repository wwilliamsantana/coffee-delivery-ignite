import { useContext } from "react";
import { CycleContext } from "../../../context/ShopCycle";
import { ItemCoffee } from "./ItemCoffee";




export function ListCoffees() {

  const { coffeesList } = useContext(CycleContext)

  return (
    <div className="max-w-[70rem] mx-auto mb-40">
      <div className="flex items-start mt-8">
        <span className="text-base-subtitle font-baloo font-extrabold text-[2rem]">Nossos cafés</span>
      </div>

      <div className="grid grid-cols-4 mt-7 gap-x-8 gap-y-10">

        {
          coffeesList.map(item => <ItemCoffee key={item.id} cardItem={item} />)
        }


      </div>

    </div>
  )
}