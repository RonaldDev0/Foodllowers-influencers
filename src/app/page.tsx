'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useData } from '@/store'

export default function Home () {
  const { influencer } = useData()
  const loginCode = useSearchParams().get('code')
  const router = useRouter()

  useEffect(() => {
    if (loginCode) {
      setTimeout(() => router.push('/'), 200)
    }
  }, [])

  if (!influencer) {
    return null
  }

  return (
    <main>
      <p>Hola Estimado {influencer.full_name}</p>
    </main>
  )
}
