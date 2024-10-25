'use client'

import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Select, SelectItem } from '@nextui-org/react'
import { useData } from './data'
import { useOptions } from './options'
import { Header } from './Header'
import { useColors } from '../colors'

export type IMode = {
  category: string
  year: string
  month: string
  weekOfMonth: string
}

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Earnings () {
  const { backgroundColor, borderColor } = useColors()
  const [mode, setMode] = useState<IMode>({
    category: 'año',
    year: '2024',
    month: 'enero',
    weekOfMonth: '1'
  })
  const [color, setColor] = useState<number>(0)

  const options = useOptions()
  const data = useData(mode, color)

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
            {['0', '1', '2'].map(item => (
              <SelectItem key={item} value={item}>
                <div
                  className='w-6 h-6 rounded-full border'
                  style={{ backgroundColor: backgroundColor[Number(item)], borderColor: borderColor[Number(item)] }}
                />
              </SelectItem>
            ))}
          </Select>
        </div>
      </CardFooter>
    </Card>
  )
}
