'use client'

import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useState } from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import { useData } from './data'
import { useOptions } from './options'
import { Header } from './Header'

export type IMode = {
  category: string
}

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Earnings () {
  const [mode, setMode] = useState<IMode>({
    category: 'año'
  })
  const options = useOptions()

  const data = useData(mode)

  return (
    <Card>
      <CardHeader className='flex flex-col'>
        <Header mode={mode} setMode={setMode} />
      </CardHeader>
      <CardBody>
        <div className='w-[700px] h-[400px] mx-4'>
          <Bar
            data={data}
            options={options as any}
            width={700}
            height={400}
          />
        </div>
      </CardBody>
    </Card>
  )
}
