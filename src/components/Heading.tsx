import imageHeading from "../assets/image-heading.svg"
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react"

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

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-dark text-white"><ShoppingCart weight="fill" /></div>
              <div className="text-base text-base-text">Compra simples e segura</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full text-white  bg-yellow"><Package weight="fill" /></div>
              <div className="text-base text-base-text">Embalagem mantém o café intacto</div>
            </div>

            <div className="flex items-center  gap-3">
              <div className="p-2 rounded-full text-white bg-base-text"><Timer weight="fill" /></div>
              <div className="text-base text-base-text"> Entrega rápida e rastreada</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full text-white bg-purple"><Coffee weight="fill" /></div>
              <div className="text-base text-base-text">O café chega fresquinho até você</div>
            </div>

          </div>

        </div>

        <div className="py-24 ">
          <img src={imageHeading} alt="" />
        </div>

      </div>
    </header>
  )
}