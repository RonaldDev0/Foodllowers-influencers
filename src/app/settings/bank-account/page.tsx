'use client'
import { useSupabase } from '@/app/providers'
import { useState, useEffect, FC } from 'react'
import { Card, CardHeader, CardBody, Select, SelectItem, Input, Button } from '@nextui-org/react'
import { Landmark } from 'lucide-react'
import { useData } from '@/store'
import { banks } from './banks'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

const Toast: FC<ToastProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) {
    return null
  }

  return (
    <div className='fixed bottom-0 right-0 m-6 animate-bounce'>
      <div className='bg-green-500 border-l-4 border-green-700 text-white px-4 py-2 shadow-md rounded-lg transform transition duration-500 ease-in-out hover:scale-105'>
        <div className='flex items-center justify-center gap-5'>
          <span className='font-bold'>{message}</span>
          <button onClick={onClose} className='text-2xl leading-none hover:text-gray-300'>&times;</button>
        </div>
      </div>
    </div>
  )
}

export default function BankAccount () {
  const { influencer, setStore } = useData()
  const { supabase } = useSupabase()

  const [bank, setBank] = useState<any>(null)
  const [bankError, setBankError] = useState<any>(null)
  const [bankNumber, setBankNumber] = useState<string>('')
  const [bankNumberError, setBankNumberError] = useState<any>(null)
  const [toastVisible, setToastVisible] = useState(false)

  function showToast () {
    setToastVisible(true)
    setTimeout(() => {
      setToastVisible(false)
    }, 3000)
  }

  const handleChangeSelect = (e: any) => {
    setBank(e.target.value)
    setBankError(null)
  }

  const handleChangeInput = (e: any) => {
    setBankNumber(e.target.value)
    setBankNumberError(null)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!bank) {
      setBankError('Selecciona tu banco')
      return
    }
    if (bankNumber.length !== 20) {
      setBankNumberError('Cuenta de banco invalida')
      return
    }

    supabase
      .from('influencers')
      .update({ bank_account: { bank, bankNumber } })
      .eq('id', influencer.id)
      .select('*')
      .single()
      .then(({ data, error }) => {
        if (error) {
          return
        }
        setStore('influencer', data)
        showToast()
      })
  }

  useEffect(() => {
    if (influencer === null) {
      return
    }
    setBank(influencer.bank_account.bank)
    setBankNumber(influencer.bank_account.bankNumber)
  }, [influencer])

  return (
    <Card className='w-96'>
      <Toast
        message='Cuenta de banco guardada!'
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
      <CardHeader className='justify-center font-semibold gap-3'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <Landmark size={38} />
          <p className='text-xl'>Cuenta Bancaria</p>
        </div>
      </CardHeader>
      <CardBody>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <Select
            selectedKeys={[bank]}
            label='Selecciona tu cuenta de banco'
            onChange={handleChangeSelect}
            errorMessage={bankError && bankError}
            isInvalid={!!bankError}
          >
            {banks.map(bank => (
              <SelectItem
                key={bank.value}
                value={bank.value}
              >
                {bank.name}
              </SelectItem>
            ))}
          </Select>
          <Input
            label='Número de cuenta'
            type='number'
            value={bankNumber}
            onChange={handleChangeInput}
            errorMessage={bankNumberError && bankNumberError}
            isInvalid={!!bankNumberError}
          />
          <Button
            type='submit'
            color='secondary'
            className='text-lg font-semibold mt-4'
          >
            Guardar
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
