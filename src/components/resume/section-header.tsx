import type { ReactNode } from "react"

export interface Props {
  children: ReactNode
}

export default function SectionHeader({ children }: Props) {
  return (
    <>
      <h3 className="font-semibold text-3xl border-b border-black my-4">
        {children}
      </h3>
    </>
  )
}
