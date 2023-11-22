'use client'
import { SocialLink } from '@/components/commons/SocialLink'
import { getAllSocials } from '@/strapi/collection/contents/Social'
import { SocialType } from '@/strapi/collection/types/SocialType'
import * as React from 'react'

interface ICSRSocialProps {}

const CSRSocial: React.FunctionComponent<ICSRSocialProps> = (props) => {
  const [socials, setSocials] = React.useState<SocialType[]>([])
  const getSocial = async () => {
    const rs = await getAllSocials()
    setSocials(rs)
  }
  React.useEffect(() => {
    getSocial()
  }, [])
  return (
    <div className="lg:pl-20">
      <ul role="list" className="space-y-4">
        {socials.map((social) => (
          <SocialLink
            href={social.Href}
            icon={social.Icon}
            key={social.Name.replaceAll(' ', '-')}
          >
            {social.Name}
          </SocialLink>
        ))}
      </ul>
    </div>
  )
}

export default CSRSocial
