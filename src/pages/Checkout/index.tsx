import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react"
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useContext, useState } from "react";
import { Form } from "./components/Form";
import { ItemCartBuy } from "./components/ItemCartBuy";
import { CycleContext } from "../../context/ShopCycle";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const schemaIsValidateInput = zod.object({
  zip: zod.number().min(1, "Informe um CEP"),
  street: zod.string().min(3, "Informe uma Rua"),
  numberHome: zod.number().min(1, "Informe  o número da casa"),
  district: zod.string().min(1, "informe o bairro"),
  complement: zod.optional(zod.string()),
  city: zod.string().min(1, "informe a cidade"),
  uf: zod.string().min(2).max(2)
})

type newDeliveryData = zod.infer<typeof schemaIsValidateInput>


const paymentMethodType: any = {
  "0": "Cartão de crédito",
  "1": "Cartão de débito",
  "2": "Dinehiro"
}


export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<string>("")
  const { cartBuyCycle, dataClientGet } = useContext(CycleContext)

  const newDataForm = useForm<newDeliveryData>({
    resolver: zodResolver(schemaIsValidateInput)
  })

  const { register, handleSubmit, reset } = newDataForm

  function handleInputData(data: newDeliveryData) {
    const paymentType = paymentMethodType[paymentMethod]

    const dataClient = {
      paymentType,
      ...data
    }
    dataClientGet(dataClient)

    setPaymentMethod("")
    reset()
  }



  const isDisableButton = !paymentMethod
  const totalItems = cartBuyCycle.reduce((acc, item) => {
    return acc + (item.cardItem.value * item.qtd)
  }, 0)
  const valueDelivery = 3.5
  const totalAll = totalItems === 0 ? 0 : totalItems + valueDelivery



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

          <form id="dataForm" onSubmit={handleSubmit(handleInputData)} autoComplete="off">
            <FormProvider {...newDataForm}>
              <Form />
            </FormProvider>
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
              Cartão de crédito
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
              cartBuyCycle.map(item => <ItemCartBuy key={item.cardItem.id} cardItem={item.cardItem} qtd={item.qtd} />)
            }

            <div className="flex flex-col  text-base-text gap-3">

              <div className="flex items-center justify-between">
                <span className="text-sm">Total de itens</span>
                <span className="text-base">{totalItems.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Entrega</span>
                <span className="text-base">{valueDelivery.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
              </div>

              <div className="flex items-center justify-between text-xl font-bold">
                <span>Total</span>
                <span>{totalAll.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
              </div>

            </div>


            <button
              disabled={isDisableButton}
              type="submit"
              form="dataForm"
              className="bg-yellow hover:bg-yellow-dark w-full text-white font-bold px-2 py-3 rounded-md uppercase text-center mt-6 disabled:opacity-[0.7] disabled:cursor-not-allowed">

              Confirmar pedido

            </button>


          </div>
        </div>
      </div>


    </div>

  )
}