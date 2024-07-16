import Image from 'next/image'
import { Card, CardBody } from '@nextui-org/react'

const earning = 2000

export function ProductCard ({ product }: { product: any }) {
  return (
    <Card key={product.id}>
      <CardBody className='p-0'>
        <Image
          src={product.preview}
          width='384'
          height='200'
          alt='preview'
          className='w-96 h-[200px]'
        />
        <div className='p-4 flex justify-between items-center'>
          <p className='text-xl'>
            {product.name}
          </p>
          <p>
            {earning.toLocaleString('es-Es', {
              style: 'currency',
              currency: 'COP',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              useGrouping: true
            })}
          </p>
        </div>
      </CardBody>
    </Card>
  )
}
