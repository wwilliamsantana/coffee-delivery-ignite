import { InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> { }




export function InputForm({ className, ...props }: InputFormProps) {
  return (
    <input
      {...props}
      className={`bg-base-input p-3 ${className} text-base-text placeholder:text-base-label rounded  outline-none  focus:ring-1 ring-yellow-dark`}
    />
  )
}