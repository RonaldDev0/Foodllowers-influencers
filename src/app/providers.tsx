'use client'
import { NextUIProvider } from '@nextui-org/react'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { createPagesBrowserClient, type SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useData } from '@/store'

type Database = {
  public: {
    Tables: {
      movies: {
        Row: {}
        Insert: {}
        Update: {}
      }
    }
  }
}

type SupabaseContext = {
  supabase: SupabaseClient<Database>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export function Providers ({ children }: { children: ReactNode }) {
  const [supabase] = useState(() => createPagesBrowserClient())
  const router = useRouter()
  const { influencer, setStore } = useData()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => router.refresh())

    return () => subscription.unsubscribe()
  }, [router, supabase])

  useEffect(() => {
    if (!influencer) return
    if (!influencer.register_complete) {
      switch (influencer.register_step) {
        case 'data_collection':
          router.push('/register')
          break
        case 'data_validation':
          router.push('/validation')
          break
      }
    }
  }, [influencer])

  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data: { session } }: any) => {
        if (session) {
          setStore('user', session.user)
          supabase
            .from('influencers')
            .select('*')
            .eq('user_id', session.user.id)
            .single()
            .then(({ data }) => {
              if (!data) {
                supabase
                  .from('influencers')
                  .insert([{ user_id: session.user.id, email: session.user.email }])
                  .select('*')
                  .then(({ data, error }) => {
                    if (error) return
                    setStore('influencer', data[0])
                  })
              }
              if (data) {
                setStore('influencer', data)
              }
            })
        }
      })
  }, [])

  return (
    <Context.Provider value={{ supabase }}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }

  return context
}
