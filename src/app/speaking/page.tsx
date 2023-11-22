import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { getAllSpeakingSections } from '@/strapi/collection/contents/SpeakingSection'
import { getSpeakingPageInfo } from '@/strapi/single/contents/SpeakingPageInfo'
import { Appearance } from './Appearance'
import { SpeakingSection } from './SpeakingSection'

const Speaking = async () => {
  const sections = await getAllSpeakingSections()
  const speakingPageInfo = await getSpeakingPageInfo()
  return (
    <SimpleLayout
      title={speakingPageInfo.Title}
      intro={speakingPageInfo.Content}
    >
      <div className="space-y-20">
        {sections.map((section) => (
          <SpeakingSection
            title={section.Title}
            key={section.Title.replaceAll(' ', '-')}
          >
            {section.Appearances.map((appearance) => (
              <Appearance
                href={appearance.Href}
                title={appearance.Title}
                description={appearance.Description}
                event={appearance.Event}
                cta={appearance.Cta}
                key={appearance.Title.replaceAll(' ', '-')}
              />
            ))}
          </SpeakingSection>
        ))}
      </div>
    </SimpleLayout>
  )
}
export default Speaking
