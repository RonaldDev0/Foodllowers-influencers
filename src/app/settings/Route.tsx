'use client'
import { usePathname } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react'

export function Route () {
  const pathname = usePathname()
  const breadcrumbs = pathname.split('/').filter(Boolean)

  return (
    <div className='flex items-center gap-5'>
      {pathname !== '/settings' && (
        <Link href='/settings'>
          <ChevronLeft size={30} />
        </Link>
      )}
      <Breadcrumbs>
        {breadcrumbs.map(item => (
          <BreadcrumbItem key={item}>{item}</BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  )
}
