'use client'
import { useState } from 'react'
import { useData } from '@/store'
import { useSupabase } from '@/app/providers'
import { Input, Button } from '@nextui-org/react'

export function Name ({ onClose }: { onClose: any }) {
  const { supabase } = useSupabase()
  const { influencer, setStore } = useData()

  const [input, setInput] = useState(influencer ? influencer.full_name : '')
  const [error, setError] = useState<any>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (input.length < 5) {
      setError('El nombre debe tener al menos 5 caracteres')
      return
    }

    supabase
      .from('influencers')
      .select('full_name')
      .neq('id', influencer.id)
      .eq('full_name', input)
      .then(({ data, error }) => {
        if (error) return

        if (data.length > 0) {
          setError('Ya existe un influencer registrado con ese nombre')
          return
        }

        supabase
          .from('influencers')
          .update({ full_name: input })
          .eq('id', influencer.id)
          .select('*')
          .then(({ error, data }) => {
            if (error) return
            setStore('influencer', data[0])
            onClose()
          })
      })
  }

  return (
    <div className='flex flex-col gap-5'>
      <b>¡Es momento de darle un nombre!</b>
      <p>Este es el nombre que verán las marcas, cocinas y seguidores cuando interactúen contigo en nuestra app. Asegúrate de elegir un nombre con el que te sientas cómodo y que refleje tu personalidad o marca personal. ¡Este será tu sello de identidad en nuestra plataforma!</p>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Nombre'
          value={input}
          onChange={(e: any) => {
            setInput(e.target.value)
            setError(null)
          }}
          errorMessage={error}
          isInvalid={!!error}
        />
        <Button
          type='submit'
          color='secondary'
          className='text-lg font-semibold mt-4'
        >
          Guardar
        </Button>
      </form>
    </div>
  )
}
