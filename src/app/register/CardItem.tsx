'use client'
import { useData } from '@/store'
import { cloneElement, useState, useEffect } from 'react'
import { Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react'
import { ChevronRight, Check } from 'lucide-react'

import type { IStep } from './registerSteps'

export function CardItem ({ icon, title, component, tableReference }: IStep) {
  const { influencer } = useData()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!influencer) return

    if (tableReference === 'bank_account') {
      setChecked((
        !!influencer?.bank_account?.accountType &&
        !!influencer?.bank_account?.bank &&
        !!influencer?.bank_account?.bankNumber &&
        !!influencer?.bank_account?.ownerName &&
        !!influencer?.bank_account?.ownerDocumentType &&
        !!influencer?.bank_account?.ownerDocumentNumber
      ))
      return
    }

    if (tableReference === 'social_networks') {
      setChecked((
        !!influencer?.social_networks?.twitter ||
        !!influencer?.social_networks?.instagram ||
        !!influencer?.social_networks?.facebook ||
        !!influencer?.social_networks?.twitch ||
        !!influencer?.social_networks?.youtube ||
        !!influencer?.social_networks?.tiktok
      ))
      return
    }

    setChecked(influencer[tableReference])
  }, [influencer])

  return (
    <>
      <div onClick={onOpen}>
        <Card className='relative group cursor-pointer w-96'>
          <CardBody>
            <div className='flex justify-between items-center relative'>
              <div className='flex items-center gap-5'>
                {icon}
                <p>{title}</p>
              </div>
              {checked && (
                <div className='absolute top-0 right-0 h-full opacity-100 group-hover:opacity-0 transition-opacity duration-200 flex items-center'>
                  <Check size={25} />
                </div>
              )}
              <div className='absolute top-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center'>
                <ChevronRight size={20} />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex justify-center'>
                <div className='flex flex-col items-center gap-3'>
                  {icon}
                  {title}
                </div>
              </ModalHeader>
              <ModalBody className='mb-5'>
                {cloneElement(component, { onClose })}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
