import { ItemCoffee } from "./ItemCoffee";


export function ListCoffees() {
  return (
    <div className="max-w-[70rem] mx-auto">
      <div className="flex items-start mt-8">
        <span className="text-base-subtitle font-baloo font-extrabold text-[2rem]">Nossos cafés</span>
      </div>

      <div className="grid grid-cols-4  mt-7 mb-40 gap-x-8 gap-y-10">


        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />
        <ItemCoffee />

      </div>

    </div>
  )
}