'use client'
import { Checkbox, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import { ClipboardList } from 'lucide-react'

export function TermsAndConditions ({ termsAndConditions, setTermsAndConditions }: { termsAndConditions: boolean, setTermsAndConditions: Function }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div className='flex justify-center items-center '>
        <Checkbox
          isSelected={termsAndConditions}
          onChange={({ target: { checked } }) => setTermsAndConditions(checked)}
          color='secondary'
        />
        <p onClick={onOpen} className='cursor-pointer hover:opacity-75 transition-all'>
          Términos y condiciones
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
    </>
  )
}
