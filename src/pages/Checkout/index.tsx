import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react"
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { InputForm } from "./components/InputForm";
import { ItemCartBuy } from "./components/ItemCartBuy";
import { CycleContext } from "../../context/ShopCycle";

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<string>("")

  const { cartBuyCycle } = useContext(CycleContext)




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


            <InputForm type="number" placeholder="CEP" className={"w-[12.5rem]"} />

            <input
              className="w-full bg-base-input p-3 text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
              type="text"
              placeholder="Rua"
            />
            <InputForm type="text" placeholder="Rua" className={"w-full"} />

            <div className="flex gap-3 items-center">
              <InputForm type="number" placeholder="Número" className={"w-[12.5rem]"} />

              <div className="relative w-full ">
                <InputForm type="text" placeholder="Complemento" className={"w-full"} />
                <span className="absolute right-3 top-4  text-base-label italic text-xs select-none">Opcional</span>
              </div>

            </div>

            <div className="flex gap-3 items-center">

              <InputForm type="text" placeholder="Bairro" className={"w-[12.5rem]"} />
              <InputForm type="text" placeholder="Cidade" className={"w-full"} />
              <InputForm type="text" placeholder="UF" className={"w-[3.75rem]"} />

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

            {
              cartBuyCycle.map(item => <ItemCartBuy cardItem={item.cardItem} qtd={item.qtd} />)
            }



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