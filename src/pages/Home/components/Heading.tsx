import imageHeading from "../../../assets/image-heading.svg"
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react"
import { IconText } from "./IconText"

export function Heading() {
  return (
    <header className="bg-backHeading w-full bg-cover bg-center ">
      <div className="max-w-[70rem] mx-auto flex item-center justify-between gap-4">

        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-baloo font-extrabold text-5xl text-base-title">Encontre o café perfeito para qualquer hora do dia</h1>
            <span className="text-xl text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-10 gap-y-5">

            <IconText element={<ShoppingCart weight='fill' />} color={"bg-yellow-dark"} />
            <IconText element={<Package weight='fill' />} color={"bg-yellow"} />
            <IconText element={<Timer weight='fill' />} color={"bg-base-text"} />
            <IconText element={<Coffee weight='fill' />} color={"bg-purple"} />

          </div>

        </div>

        <div className="py-24 ">
          <img src={imageHeading} alt="" />
        </div>

      </div>
    </header>
  )
}