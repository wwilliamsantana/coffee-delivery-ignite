import { ReactNode } from "react"

interface IconTextPorps {
  children: ReactNode
  color: string
}

export function IconText({ children, color }: IconTextPorps) {
  return (
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-full text-white ${color} `}>{children}</div>
      <div className="text-base text-base-text">Embalagem mantém o café intacto</div>
    </div>
  )
}