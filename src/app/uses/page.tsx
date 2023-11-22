import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { getAllUses } from '@/strapi/collection/contents/Use'
import { getUsesPageInfo } from '@/strapi/single/contents/UsesPageInfo'
import { Tool } from './Tool'
import { ToolsSection } from './ToolsSection'

export default async function Uses() {
  const usePageInfo = await getUsesPageInfo()
  const uses = await getAllUses()
  return (
    <SimpleLayout title={usePageInfo.Title} intro={usePageInfo.Content}>
      <div className="space-y-20">
        {uses.map((use) => (
          <ToolsSection
            title="Workstation"
            key={use.Title.replaceAll(' ', '-')}
          >
            {use.Tools.map((tool) => (
              <Tool title={tool.Title} key={tool.Title.replaceAll(' ', '-')}>
                {tool.Content}
              </Tool>
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  )
}
