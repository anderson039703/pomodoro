import { createContext, ReactNode, useContext, useState } from 'react'

export interface ICycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDete?: Date
}

interface CyclesContextType {
  cycles: ICycle[]
  setCycles: (value: ICycle[]) => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<ICycle[]>([])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        setCycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export function useCyclesContext() {
  return useContext(CyclesContext)
}
