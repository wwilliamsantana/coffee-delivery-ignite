import { MapPin, Money, Timer } from "phosphor-react"
import imageSuccess from "../../assets/Ilustration.svg"

export function Success() {
  return (
    <div className="max-w-[70rem] mx-auto">
      <div className="w-full flex flex-col items-start mt-20">
        <span className="font-baloo font-extrabold text-[2rem] leading-10 text-yellow-dark">Uhu! Pedido confirmado</span>
        <span className="text-xl text-base-subtitle">Agora é só aguardar que logo o café chegará até você</span>

      </div>
      <div className="flex items-center mt-10 gap-[6.375rem]">

        <div className="p-0.5 bg-gradient-to-tl from-purple to-yellow rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
          <div className="w-[32.875rem] rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem] p-[2.375rem] bg-background flex flex-col gap-8">

            <div className="flex items-center justify-start gap-3">
              <div className="p-2 rounded-full bg-purple text-white">
                <MapPin size={16} weight="fill" />
              </div>

              <div className="text-base-text">
                <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{<br />} Farrapos - Porto Alegre, RS</span >
              </div>

            </div>

            <div className="flex items-center justify-start gap-3">
              <div className="p-2 rounded-full bg-yellow text-white">
                <Timer size={16} weight="fill" />
              </div>

              <div className="text-base-text">
                <span>Previsão de entrega{<br />} <strong>20 min - 30 min</strong></span >
              </div>

            </div>

            <div className="flex items-center justify-start gap-3">
              <div className="p-2 rounded-full bg-yellow-dark text-white">
                <Money size={16} weight="fill" />
              </div>

              <div className="text-base-text">
                <span>Pagamento na entrega{<br />}<strong>Cartão de crédito</strong></span >
              </div>

            </div>



          </div>
        </div>

        <div className="w-full">
          <img src={imageSuccess} alt="" />
        </div>
      </div>
    </div>
  )
}