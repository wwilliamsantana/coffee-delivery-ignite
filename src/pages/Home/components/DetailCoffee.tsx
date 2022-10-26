
interface TypeCoffeeProp {
  type: string
}

export function DetailCoffee({ type }: TypeCoffeeProp) {
  return (
    <div className="bg-yellow-light text-yellow-dark py-1 px-2 rounded-full 
            text-[0.625rem] font-bold leading-[0.8125rem] uppercase">
      {type}
    </div>
  )
}