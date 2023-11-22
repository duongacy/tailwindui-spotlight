'use client'
import { getAboutPageInfo } from '@/strapi/single/contents/AboutPageInfo'
import Image from 'next/image'
import * as React from 'react'
import { API_HOST } from '../../../configs'
import { AboutPageInfoType } from '@/strapi/single/types/AboutPageInfoType'

interface ICSRPageInfoProps {}

const CSRPageInfo: React.FunctionComponent<ICSRPageInfoProps> = (props) => {
  const [aboutPageInfo, setAboutPageInfo] = React.useState<AboutPageInfoType>()

  const getPageInfo = async () => {
    const rs = await getAboutPageInfo()
    setAboutPageInfo(rs)
  }

  React.useEffect(() => {
    getPageInfo()
  }, [])

  if (!aboutPageInfo) {
    return <></>
  }

  return (
    <>
      <div className="lg:pl-20">
        <div className="max-w-xs px-2.5 lg:max-w-none">
          <Image
            width={aboutPageInfo.MainImage.width}
            height={aboutPageInfo.MainImage.height}
            src={API_HOST + aboutPageInfo.MainImage.url}
            alt={aboutPageInfo.MainImage.alternativeText}
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square rotate-3 rounded-2xl bg-neutral-100 object-cover dark:bg-neutral-800"
          />
        </div>
      </div>
      <div className="lg:order-first lg:row-span-2">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
          {aboutPageInfo.Title}
        </h1>
        <div className="mt-6 space-y-7 text-base text-neutral-600 dark:text-neutral-400">
          {aboutPageInfo.Content}
        </div>
      </div>
    </>
  )
}

export default CSRPageInfo
