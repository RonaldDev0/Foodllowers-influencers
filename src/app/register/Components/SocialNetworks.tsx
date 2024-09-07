'use client'
import { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { useData } from '@/store'
import { useSupabase } from '@/app/providers'
import { Twitter, Instagram, Facebook, Twitch, Youtube, Music2 } from 'lucide-react'

const size = 30

export function SocialNetworks ({ onClose }: { onClose: any }) {
  const { influencer, setStore } = useData()
  const { supabase } = useSupabase()

  const [twitter, setTwitter] = useState<any>(influencer ? influencer?.social_networks?.twitter : '')
  const [instagram, setInstagram] = useState<any>(influencer ? influencer?.social_networks?.instagram : '')
  const [facebook, setFacebook] = useState<any>(influencer ? influencer?.social_networks?.facebook : '')
  const [twitch, setTwitch] = useState<any>(influencer ? influencer?.social_networks?.twitch : '')
  const [youtube, setYoutube] = useState<any>(influencer ? influencer?.social_networks?.youtube : '')
  const [tiktok, setTiktok] = useState<any>(influencer ? influencer?.social_networks?.tiktok : '')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!(twitter || instagram || facebook || twitch || youtube || tiktok)) return

    supabase
      .from('influencers')
      .update({ social_networks: { twitter, instagram, facebook, twitch, youtube, tiktok } })
      .eq('id', influencer.id)
      .select('*')
      .then(({ error, data }) => {
        if (error) return
        setStore('influencer', data[0])
      })

    onClose()
  }

  return (
    <div className='flex flex-col gap-5'>
      <b>¡Es momento de compartir tus redes!</b>
      <p>Para que podamos conectar tu perfil con las marcas y cocinas adecuadas, necesitamos que nos proporciones la URL de tus redes sociales. Este paso es clave, ya que nos ayudará a analizar tu alcance y asegurarnos de ofrecerte las mejores oportunidades de colaboración. ¡Tus redes sociales son el corazón de tu influencia, así que asegúrate de compartir todas las plataformas en las que eres activo!</p>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-center items-center gap-3'>
            <Twitter size={size} />
            <Input
              placeholder='Twitter'
              value={twitter}
              onChange={(e: any) => {
                setTwitter(e.target.value)
              }}
            />
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Instagram size={size} />
            <Input
              placeholder='Instagram'
              value={instagram}
              onChange={(e: any) => {
                setInstagram(e.target.value)
              }}
            />
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Facebook size={size} />
            <Input
              placeholder='Facebook'
              value={facebook}
              onChange={(e: any) => {
                setFacebook(e.target.value)
              }}
            />
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Twitch size={size} />
            <Input
              placeholder='Twitch'
              value={twitch}
              onChange={(e: any) => {
                setTwitch(e.target.value)
              }}
            />
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Youtube size={size} />
            <Input
              placeholder='Youtube'
              value={youtube}
              onChange={(e: any) => {
                setYoutube(e.target.value)
              }}
            />
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Music2 size={size} />
            <Input
              placeholder='TikTok'
              value={tiktok}
              onChange={(e: any) => {
                setTiktok(e.target.value)
              }}
            />
          </div>
        </div>
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
