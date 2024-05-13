import { ColorSchema } from './ColorSchema'
import { Card } from './Card'
import { Landmark } from 'lucide-react'

export default function Settings () {
  return (
    <main className='flex flex-col gap-2'>
      <ColorSchema />
      <Card
        path='/bank-account'
        icon={<Landmark size={28} />}
        title='Cuenta de banco'
      />
    </main>
  )
}
