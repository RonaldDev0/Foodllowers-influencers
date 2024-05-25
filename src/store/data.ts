import { create } from 'zustand'

interface State {
  darkMode: boolean
  balanceFetched: boolean
  balance: number
  balanceHistory: {
    id: string
    created_at: string
    amount: number
  }[]
  products: any
  user: any
  influencer: any
}

interface Actions {
  setStore: (property: keyof State, value: any) => void
}

export const useData = create<State & Actions>(set => ({
  darkMode: JSON.parse(localStorage.getItem('darkMode') || 'true'),
  balanceFetched: false,
  balance: 0,
  balanceHistory: [],
  products: [],
  user: null,
  influencer: null,
  setStore: (property, value) => set(prev => ({ ...prev, [property]: value }))
}))
