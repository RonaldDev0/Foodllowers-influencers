'use client'
import { DateRangePicker, Select, SelectItem } from '@nextui-org/react'
import type { IMode } from './index'

type IProps = {
  mode: IMode,
  setMode: Function
}

type ISelectProps = {
  items: string[]
  className?: string
  defaultKey: string
  onChangeTarget: string
  setMode: Function
}

const options = {
  años: Array.from({ length: new Date().getFullYear() - 2024 + 1 }, (_, i) => (2024 + i).toString()),
  meses: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  semanas: ['1', '2', '3', '4']
}

const ModeSelect = ({ items, className, defaultKey, onChangeTarget, setMode }: ISelectProps) => (
  <Select
    className={className}
    defaultSelectedKeys={[defaultKey]}
    onChange={({ target: { value } }) => setMode((prev: IMode) => ({ ...prev, [onChangeTarget]: value as string }))}
  >
    {items.map(item => (
      <SelectItem key={item} value={item}>
        {item}
      </SelectItem>
    ))}
  </Select>
)

export function Header ({ mode, setMode }: IProps) {
  return (
    <div className='flex gap-3 mt-3'>
      <div className='flex justify-center items-center gap-3'>
        <p>Seleccionar por</p>
        <Select
          className='w-36'
          defaultSelectedKeys={['año']}
          onChange={({ target: { value } }) => setMode((prev: IMode) => ({ ...prev, category: value as string }))}
        >
          {['año', 'mes', 'semana'].map(item => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </Select>
      </div>

      {mode.category === 'año' && (
        <ModeSelect
          items={options.años}
          className='w-24'
          defaultKey='2024'
          onChangeTarget='year'
          setMode={setMode}
        />
      )}

      {mode.category === 'mes' && (
        <div className='flex justify-center items-center gap-3'>
          <ModeSelect
            items={options.meses}
            className='w-36'
            defaultKey={mode.month}
            onChangeTarget='month'
            setMode={setMode}
          />
          <p>de</p>
          <ModeSelect
            items={options.años}
            className='w-24'
            defaultKey='2024'
            onChangeTarget='year'
            setMode={setMode}
          />
        </div>
      )}

      {mode.category === 'semana' && (
        <div className='flex justify-center items-center gap-3'>
          <ModeSelect
            items={options.semanas}
            className='w-16'
            defaultKey={mode.weekOfMonth}
            onChangeTarget='weekOfMonth'
            setMode={setMode}
          />
          <p>de</p>
          <ModeSelect
            items={options.meses}
            className='w-36'
            defaultKey={mode.month}
            onChangeTarget='month'
            setMode={setMode}
          />
          <p>de</p>
          <ModeSelect
            items={options.años}
            className='w-24'
            defaultKey='2024'
            onChangeTarget='year'
            setMode={setMode}
          />
        </div>
      )}

      {mode.category === 'personalizado' && (
        <div className='flex justify-center items-center gap-5'>
          <DateRangePicker className='w-64' />
        </div>
      )}
    </div>
  )
}
