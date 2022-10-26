import image1 from "../assets/coffees/Image.svg"
import image2 from "../assets/coffees/Image-1.svg"
import image3 from "../assets/coffees/Image-2.svg"
import image4 from "../assets/coffees/Image-3.svg"
import image5 from "../assets/coffees/Image-4.svg"
import image6 from "../assets/coffees/Image-5.svg"
import image7 from "../assets/coffees/Image-6.svg"
import image8 from "../assets/coffees/Image-7.svg"
import image9 from "../assets/coffees/Image-8.svg"
import image10 from "../assets/coffees/Image-9.svg"
import image11 from "../assets/coffees/Image-10.svg"
import image12 from "../assets/coffees/Image-11.svg"
import image13 from "../assets/coffees/Image-12.svg"
import image14 from "../assets/coffees/Image-13.svg"

export interface CoffeesProps {
  id: number,
  title: string
  subtitle: string
  detail: string[]
  value: number
  imageSRC: string
}

export const coffeesList: CoffeesProps[] = [
  {
    id: 1,
    title: "Expresso Tradicional",
    subtitle: "O tradicional café feito com água quente e grãos moídos",
    detail: [
      "tradicional"
    ],
    value: 9.9,
    imageSRC: image1
  },
  {
    id: 2,
    title: "Expresso Americano",
    subtitle: "Expresso diluído, menos intenso que o tradicional",
    detail: [
      "tradicional"
    ],
    value: 9.9,
    imageSRC: image2
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    subtitle: "Café expresso tradicional com espuma cremosa",
    detail: [
      "tradicional"
    ],
    value: 9.9,
    imageSRC: image3
  },
  {
    id: 4,
    title: "Expresso Gelado",
    subtitle: "Bebida preparada com café expresso e cubos de gelo",
    detail: [
      "tradicional",
      "gelado"
    ],
    value: 9.9,
    imageSRC: image4
  },
  {
    id: 5,
    title: "Café com Leite",
    subtitle: "Meio a meio de expresso tradicional com leite vaporizado",
    detail: [
      "tradicional",
      "Com leite"
    ],
    value: 9.9,
    imageSRC: image5
  },
  {
    id: 6,
    title: "Latte",
    subtitle: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    detail: [
      "tradicional",
      "Com leite"
    ],
    value: 9.9,
    imageSRC: image6
  },
  {
    id: 7,
    title: "Capuccino",
    subtitle: "Bebida com canela feita de doses iguais de café, leite e espuma",
    detail: [
      "tradicional",
      "Com leite"
    ],
    value: 9.9,
    imageSRC: image7
  },
  {
    id: 8,
    title: "Macchiato",
    subtitle: "Café expresso misturado com um pouco de leite quente e espuma",
    detail: [
      "Tradicional",
      "Com leite"
    ],
    value: 9.9,
    imageSRC: image8
  },
  {
    id: 9,
    title: "Mocaccino",
    subtitle: "Café expresso com calda de chocolate, pouco leite e espuma",
    detail: [
      "Tradicional",
      "Com leite"
    ],
    value: 9.9,
    imageSRC: image9
  },
  {
    id: 10,
    title: "Chocolate Quente",
    subtitle: "Bebida feita com chocolate dissolvido no leite quente e café",
    detail: [
      "Tradicional",
      "Com leite"
    ],
    value: 9.9,
    imageSRC: image10
  },
  {
    id: 11,
    title: "Cubano",
    subtitle: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    detail: [
      "Especial",
      "Alcoólico",
      "Gelado"
    ],
    value: 9.9,
    imageSRC: image11
  },
  {
    id: 12,
    title: "Havaiano",
    subtitle: "Bebida adocicada preparada com café e leite de coco",
    detail: [
      "Especial"
    ],
    value: 9.9,
    imageSRC: image12
  },
  {
    id: 13,
    title: "Árabe",
    subtitle: "Bebida preparada com grãos de café árabe e especiarias",
    detail: [
      "Especial"
    ],
    value: 9.9,
    imageSRC: image13
  },
  {
    id: 14,
    title: "Irlandês",
    subtitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    detail: [
      "Especial",
      "Alcoólico"
    ],
    value: 9.9,
    imageSRC: image14
  }
]

