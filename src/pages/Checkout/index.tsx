import { Minus, Plus, Trash, MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react"
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import image1 from "../../assets/coffees/Image.svg"
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Checkout() {

  const [paymentMethod, setPaymentMethod] = useState<string>("")

  console.log(paymentMethod)

  return (
    <div className="max-w-[70rem] mx-auto flex items-start justify-center gap-8 mt-10">

      <div className="flex flex-col flex-1 gap-[0.9375rem] items-start">
        <span className="font-baloo font-bold text-lg text-base-subtitle">Complete seu pedido</span>

        <div className="bg-base-card p-10 rounded-md w-full flex flex-col gap-8">

          <div className="flex items-start gap-2">
            <MapPinLine size={22} className="text-yellow-dark" />

            <div className="flex items-start flex-col">
              <span className="text-base-subtitle">Endereço de Entrega</span>
              <span className="text-base-text text-sm">Informe o endereço onde deseja receber seu pedido</span>

            </div>

          </div>

          <form action="" className="flex flex-col gap-4">

            <input
              className="w-[12.5rem] bg-base-input p-3 text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
              type="number"
              placeholder="CEP"
            />
            <input
              className="w-full bg-base-input p-3 text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
              type="text"
              placeholder="Rua"
            />

            <div className="flex gap-3 items-center">
              <input
                className="w-[12.5rem] bg-base-input p-3 text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
                type="number"
                placeholder="Número"
              />
              <div className="relative w-full ">
                <input
                  className="w-full bg-base-input p-3 text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
                  type="text"
                  placeholder="Complemento"
                />
                <span className="absolute right-3 top-4  text-base-label italic text-xs select-none">Opcional</span>
              </div>

            </div>

            <div className="flex gap-3 items-center">

              <input
                className="w-[12.5rem] bg-base-input p-3 text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
                type="text"
                placeholder="Bairro"
              />
              <input
                className="w-full bg-base-input p-3 text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
                type="text"
                placeholder="Cidade"
              />
              <input
                className="w-[3.75rem] bg-base-input p-3 text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
                type="text"

                placeholder="UF"
              />


            </div>
          </form>

        </div>


        <div className="bg-base-card p-10 rounded-md w-full flex flex-col gap-8">

          <div className="flex items-start gap-2">
            <CurrencyDollar size={22} className="text-purple" />
            <div className="flex items-start flex-col">
              <span className="text-base-subtitle">Pagamento</span>
              <span className="text-base-text text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </div>


          <ToggleGroup.Root type="single" className="flex items-center gap-3" onValueChange={setPaymentMethod} value={paymentMethod}  >
            <ToggleGroup.Item
              value="0"
              className={`uppercase w-full p-4 rounded-md  text-base-text text-xs hover:bg-base-hover flex items-center gap-3 ${paymentMethod === "0" ? "bg-purple-light border-1 ring-1 ring-purple" : "bg-base-button ring-0"}`}
            >
              <CreditCard size={17} className="text-purple" />
              Cartão de Crédito
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value="1"
              className={`uppercase w-full p-4 rounded-md  text-base-text text-xs hover:bg-base-hover flex items-center gap-3 ${paymentMethod === "1" ? "bg-purple-light ring-1 ring-purple" : "bg-base-button ring-0"}`}
            >
              <Bank size={17} className="text-purple" />
              cartão de débito
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value="2"
              className={`uppercase w-full p-4 rounded-md  text-base-text text-xs hover:bg-base-hover flex items-center gap-3 ${paymentMethod === "2" ? "bg-purple-light ring-1 ring-purple" : "bg-base-button ring-0"}`}
            >
              <Money size={17} className="text-purple" />
              Dinheiro
            </ToggleGroup.Item>
          </ToggleGroup.Root>




        </div>

      </div>



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

            <NavLink to={"/checkout/success"}>
              <button className="bg-yellow hover:bg-yellow-dark w-full text-white font-bold px-2 py-3 rounded-md uppercase text-center mt-6">
                Confirmar pedido
              </button>
            </NavLink>

          </div>
        </div>
      </div>


    </div>
  )
}