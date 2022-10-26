import { useFormContext } from "react-hook-form"



export function Form() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col gap-4">
      <input
        type="number"
        placeholder="CEP"
        id="zip"
        className="bg-base-input p-3 w-[12.5rem] text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
        {...register("zip", { valueAsNumber: true })}
      />
      <input
        type="text"
        placeholder="Rua"
        id="street"
        className="bg-base-input p-3 w-full text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
        {...register("street")}
      />
      <div className="flex gap-3 items-center">
        <input
          type="number"
          placeholder="Número"
          id="numberHome"
          className="bg-base-input p-3 w-[12.5rem] text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
          {...register("numberHome", { valueAsNumber: true })}
        />
        <div className="relative w-full ">
          <input
            type="text"
            placeholder="Complemento"
            id="complement"
            className="bg-base-input p-3 w-full text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
            {...register("complement")}
          />
          <span className="absolute right-3 top-4  text-base-label italic text-xs select-none">Opcional</span>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <input
          type="text"
          placeholder="Bairro"
          id="district"
          className="bg-base-input p-3 w-[12.5rem] text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
          {...register("district")}
        />
        <input
          type="text"
          placeholder="Cidade"
          id="city"
          className="bg-base-input p-3 w-full text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
          {...register("city")}
        />
        <input
          type="text"
          placeholder="UF"
          id="uf"
          min={1}
          max={2}
          className="bg-base-input p-3 w-[3.75rem] text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark"
          {...register("uf")}
        />
      </div>
    </div>

  )
}

/*
<form  id="dataForm" onSubmit={handleSubmit(handleInputData)}>
            


              <InputForm id="zip" type="number" placeholder="CEP" className={""}  {...register("zip")} />
              <InputForm id="teste" type="text" placeholder="Rua" className={"w-full"} />

              <div className="flex gap-3 items-center">
                <InputForm id="numberHome" type="number" placeholder="Número" className={"w-[12.5rem]"} />

                <div className="relative w-full ">
                  <InputForm id="complement" type="text" placeholder="Complemento" className={"w-full"} />
                  <span className="absolute right-3 top-4  text-base-label italic text-xs select-none">Opcional</span>
                </div>

              </div>

              <div className="flex gap-3 items-center">
                <InputForm id="district" type="text" placeholder="Bairro" className={"w-[12.5rem]"} />
                <InputForm id="city" type="text" placeholder="Cidade" className={"w-full"} />
                <InputForm id="uf" type="text" placeholder="UF" className={"w-[3.75rem]"} />
              </div>
              <button type="submit">Teste</button>
            
          </form>

*/
