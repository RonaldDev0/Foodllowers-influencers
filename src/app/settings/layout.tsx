import type { ReactNode } from 'react'
import { Route } from './Route'

export default function Layout ({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col gap-5'>
      <Route />
      {children}
    </div>
  )
}
