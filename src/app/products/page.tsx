'use client'
import { useSupabase } from '../providers'
import { useEffect } from 'react'
import { useData } from '@/store'
import { ProductCard } from './ProductCard'

export default function Products () {
  const { influencer, products, setStore } = useData()
  const { supabase } = useSupabase()

  useEffect(() => {
    if (influencer && products.length === 0) {
      supabase
        .from('products')
        .select('id, preview, name, category, description, price, state, influencers( full_name, avatar )')
        .eq('id_influencer', influencer.id)
        .then(({ data, error }) => {
          if (error) {
            return
          }
          setStore('products', data)
        })
    }
  }, [influencer, products])

  return (
    <main className='flex flex-wrap gap-5 justify-center max-w-7xl'>
      {products?.map((product: any) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </main>
  )
}
