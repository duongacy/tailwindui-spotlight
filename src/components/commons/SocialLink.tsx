import { ImageType } from '@/strapi/common-types/ImageType'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { API_HOST } from '../../../configs'

export function SocialLink({
  className,
  href,
  children,
  icon,
}: {
  className?: string
  href: string
  icon: ImageType
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-neutral-800 transition hover:text-teal-500 dark:text-neutral-200 dark:hover:text-teal-500"
      >
        <Image
          src={API_HOST + icon.url}
          width={icon.width}
          height={icon.height}
          alt={icon.alternativeText}
          className='h-6 w-6 flex-none fill-neutral-500 transition group-hover:fill-teal-500'
        />
        {/* <Icon className="h-6 w-6 flex-none fill-neutral-500 transition group-hover:fill-teal-500" /> */}
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
