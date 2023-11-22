import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { getThankyouPageInfo } from '@/strapi/single/contents/ThankyouPageInfo'

const ThankYou = async () => {
  const thankyou = await getThankyouPageInfo()
  return <SimpleLayout title={thankyou.Title} intro={thankyou.Content} />
}

export default ThankYou
