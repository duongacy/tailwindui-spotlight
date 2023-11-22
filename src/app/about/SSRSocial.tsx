import { SocialLink } from '@/components/commons/SocialLink'
import { getAllSocials } from '@/strapi/collection/contents/Social'
import * as React from 'react'

interface ISSRSocialProps {}

const SSRSocial: React.FunctionComponent<ISSRSocialProps> = async (props) => {
  const socials = await getAllSocials()
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

export default SSRSocial
