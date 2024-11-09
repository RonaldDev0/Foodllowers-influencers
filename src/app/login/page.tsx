'use client'
import Image from 'next/image'
import { Button, Card, CardHeader, CardBody, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox } from '@nextui-org/react'
import { useSupabase } from '../providers'
import { ClipboardList } from 'lucide-react'
import { useState } from 'react'

export const revalidate = 7 * 24 * 60 * 60

export default function Login () {
  const { supabase } = useSupabase()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { isOpen: isOpenModal, onOpen: onOpenModal, onOpenChange: onOpenChangeModal } = useDisclosure()
  const [checked, setChecked] = useState(false)

  function login () {
    if (!checked) {
      onOpenModal()
      return
    }

    supabase.auth
      .signInWithOAuth({
        provider: 'google'
        // options: { redirectTo: window.location.origin + '/api/auth/callback' }
      })
  }

  return (
    <main className='h-screen flex justify-center items-center'>
      <Image
        src='/img/LogName.png'
        alt='Google'
        width='450'
        height='450'
        className='fixed
        [@media(max-width:800px)]:top-32
        [@media(min-width:800px)]:top-60'
      />
      <Card className='p-10 [@media(max-width:800px)]:p-2'>
        <CardHeader className='justify-center text-2xl'>
          Iniciar sesión
        </CardHeader>
        <CardBody className='justify-center items-center flex flex-col gap-6'>
          <Button
            onPress={() => login()}
            className='flex justify-center items-center gap-2 w-80 py-6 text-lg bg-zinc-950'
          >
            <Image
              src='/icons/google.svg'
              alt='Google'
              width='35'
              height='45'
            />
            <p>
              Continuar con Google
            </p>
          </Button>
          <div className='flex justify-center items-center gap-2'>
            <Checkbox isSelected={checked} onChange={() => setChecked(!checked)} />
            <p className='text-purple-500 cursor-pointer' onClick={onOpen}>
              Terminos y Condiciones de Uso
            </p>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {() => (
                <>
                  <ModalHeader>
                    <div className='flex flex-col gap-3 justify-center items-center w-full'>
                      <ClipboardList size={30} />
                      <p className='font-semibold text-lg'>
                        Términos y Condiciones de Uso
                      </p>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className='overflow-y-auto h-[75vh]'>
                      <b>1. Información General:</b> <br /><br />
                      Los influencers deben aceptar estos términos y condiciones para colaborar con Foodllowers. <br /><br /> Foodllowers se reserva el derecho de modificar estos términos en cualquier momento. <br /><br />

                      <b>2. Responsabilidades:</b> <br /><br />
                      Los influencers son responsables de promover los productos de Foodllowers de manera honesta y en conformidad con las leyes y normativas publicitarias aplicables. <br /><br /> Cualquier incumplimiento puede resultar en la cancelación del acuerdo. <br /><br />

                      <b>3. Políticas de Pago:</b> <br /><br />
                      Los pagos a los influencers se realizarán mensualmente, basados en el rendimiento de las campañas y validación de los resultados por parte de Foodllowers. <br /><br />

                      <b>4. Propiedad Intelectual:</b> <br /><br />
                      El contenido creado por los influencers en relación con Foodllowers es propiedad de Foodllowers. <br /><br /> Los influencers no pueden utilizar este contenido para otros fines sin autorización. <br /><br />

                      <b>5. Privacidad:</b> <br /><br />
                      Los influencers deben garantizar la confidencialidad de cualquier información obtenida a través de Foodllowers y no compartirla con terceros sin autorización previa. <br /><br />

                      <b>6. Uso del Servicio:</b> <br /><br />
                      Los influencers deben utilizar la app de Foodllowers únicamente para gestionar promociones y colaboraciones. <br /><br /> Cualquier uso indebido resultará en la terminación de la colaboración. <br /><br />
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    {}
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Modal isOpen={isOpenModal} onOpenChange={onOpenChangeModal}>
            <ModalContent>
              {() => (
                <>
                  <ModalHeader>
                    <div className='flex flex-col gap-3 justify-center items-center w-full'>
                      <ClipboardList size={30} />
                      <p className='font-semibold text-lg'>
                        Términos y Condiciones de Uso
                      </p>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    para continuar debes aceptar los términos y condiciones de uso
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardBody>
      </Card>
    </main>
  )
}
