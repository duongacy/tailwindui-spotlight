import SSRPageInfo from './SSRPageInfo'
import SSRSocial from './SSRSocial'

export default async function About() {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <SSRPageInfo />
      <SSRSocial />
    </div>
  )
}
