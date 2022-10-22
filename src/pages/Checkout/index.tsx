import { Minus, Plus, Trash } from "phosphor-react"
import image1 from "../../assets/coffees/Image.svg"

export function Checkout() {
  return (
    <div className="max-w-[70rem] mx-auto flex items-start justify-center">

      {/* <div className="flex-1 flex items-center">

      </div> */}
      <div className="flex flex-col gap-[0.9375rem] items-start">
        <span className="font-baloo font-bold text-lg text-base-subtitle">Cafés selecionados</span>

        <div className="bg-base-card flex items-center w-[28rem] p-10 rounded-md rounded-tr-[2.75rem] rounded-bl-[2.75rem]">
          <div className="w-[23rem] flex flex-col">

            <div className="flex items-start justify-between">
              <img className="w-16 h-16 mr-5" src={image1} alt="" />
              <div className="flex flex-col items-start gap-2 flex-1">
                <span>Expresso Tradicional</span>

                <div className="flex items-center gap-2">

                  <div className="bg-base-button px-2 py-[0.15rem] flex items-center gap-1 rounded-md ">
                    <button className="text-purple hover:text-purple-dark">
                      <Minus size={14} weight={"bold"} />
                    </button>
                    <span>
                      2
                    </span>
                    <button className="text-purple hover:text-purple-dark">
                      <Plus size={14} weight={"bold"} />
                    </button>
                  </div>

                  <button className="bg-base-button hover:bg-base-hover px-2 py-[0.407rem] flex items-center gap-1 rounded-md ">

                    <Trash weight={"regular"} className="text-purple" />

                    <span className="uppercase text-base-text text-xs">Remover</span>

                  </button>

                </div>
              </div>
              <span className="text-base-text text-base font-bold">R$ 9,90</span>
            </div>

            <span className="border border-solid border-base-button my-6"></span>

            <div className="flex items-start justify-between">
              <img className="w-16 h-16 mr-5" src={image1} alt="" />
              <div className="flex flex-col items-start gap-2 flex-1">
                <span>Expresso Tradicional</span>

                <div className="flex items-center gap-2">

                  <div className="bg-base-button px-2 py-[0.15rem] flex items-center gap-1 rounded-md ">
                    <button className="text-purple hover:text-purple-dark">
                      <Minus size={14} weight={"bold"} />
                    </button>
                    <span>
                      2
                    </span>
                    <button className="text-purple hover:text-purple-dark">
                      <Plus size={14} weight={"bold"} />
                    </button>
                  </div>

                  <button className="bg-base-button hover:bg-base-hover px-2 py-[0.407rem] flex items-center gap-1 rounded-md ">

                    <Trash weight={"regular"} className="text-purple" />

                    <span className="uppercase text-base-text text-xs">Remover</span>

                  </button>

                </div>
              </div>
              <span className="text-base-text text-base font-bold">R$ 9,90</span>
            </div>


            <span className="border border-solid border-base-button my-6"></span>

            <div className="flex flex-col  text-base-text gap-3">

              <div className="flex items-center justify-between">
                <span className="text-sm">Total de itens</span>
                <span className="text-base">R$ 29,70</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Entrega</span>
                <span className="text-base">R$ 3,50</span>
              </div>

              <div className="flex items-center justify-between text-xl font-bold">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>

            </div>


            <button className="bg-yellow hover:bg-yellow-dark text-white px-2 py-3 rounded-md uppercase text-center mt-6">
              Confirmar pedido
            </button>


          </div>
        </div>
      </div>


    </div>
  )
}