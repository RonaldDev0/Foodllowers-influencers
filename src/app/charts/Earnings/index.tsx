'use client'
import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useState, useEffect } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Select, SelectItem } from '@nextui-org/react'
import { Header } from './Header'
import { useColors } from '../options'
import { useData } from '@/store'

export type IMode = {
  category: string
  year: string
  month: string
  weekOfMonth: string
}

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Earnings () {
  const { backgroundColor, borderColor, options } = useColors('Ganancias')
  const { influencer } = useData()
  const [mode, setMode] = useState<IMode>({
    category: 'año',
    year: '2024',
    month: 'Enero',
    weekOfMonth: '1'
  })
  const [color, setColor] = useState<number>(0)
  const [data, setData] = useState<{ labels: string[]; data: number[] } | null>(null)

  useEffect(() => {
    if (!influencer || !mode) return

    fetch('/api/charts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode, influencerId: influencer.id })
    })
      .then(res => res.json())
      .then(res => setData(res))
  }, [mode, influencer])

  if (!data) return <div>Loading...</div>
  return (
    <Card>
      <CardHeader className='flex flex-col'>
        <Header mode={mode} setMode={setMode} />
      </CardHeader>
      <CardBody>
        <div className='w-[700px] h-[400px] mx-4'>
          <Bar
            data={{
              labels: data.labels,
              datasets: [
                {
                  label: 'Ganancias',
                  backgroundColor: backgroundColor[color],
                  borderColor: borderColor[color],
                  borderWidth: 2,
                  data: data.data
                }
              ]
            }}
            options={options as any}
            width={700}
            height={400}
          />
        </div>
      </CardBody>
      <CardFooter>
        <div className='w-full flex justify-center items-center gap-3'>
          <p>Color:</p>
          <Select
            className='w-24'
            selectedKeys={[String(color)]}
            onChange={({ target: { value } }) => setColor(Number(value))}
            renderValue={() => (
              <div
                className='w-6 h-6 rounded-full border'
                style={{
                  backgroundColor: backgroundColor[color],
                  borderColor: borderColor[color]
                }}
              />
            )}
          >
            {['0', '1', '2']?.map(item => (
              <SelectItem key={item} value={item}>
                <div
                  className='w-6 h-6 rounded-full border'
                  style={{
                    backgroundColor: backgroundColor[Number(item)],
                    borderColor: borderColor[Number(item)]
                  }}
                />
              </SelectItem>
            ))}
          </Select>
        </div>
      </CardFooter>
    </Card>
  )
}
