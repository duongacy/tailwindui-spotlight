import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/layouts/SimpleLayout'
import { getAllProjects } from '@/strapi/collection/contents/Project'
import { getProjectsPageInfo } from '@/strapi/single/contents/ProjectPageInfo'
import Image from 'next/image'
import { API_HOST } from '../../../configs'
import { LinkIcon } from '@/icons/LinkIcon'

export default async function Projects() {
  const projects = await getAllProjects()
  const projectsPageInfo = await getProjectsPageInfo()

  return (
    <SimpleLayout
      title={projectsPageInfo.Title}
      intro={projectsPageInfo.Content}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.Name.replaceAll(' ', '-')}>``
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0">
              <Image
                src={API_HOST + project.Logo.url}
                alt={project.Logo.alternativeText}
                width={project.Logo.width}
                height={project.Logo.height}
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-neutral-800 dark:text-neutral-100">
              <Card.Link href={project.Link.Href}>
                {project.Name}
              </Card.Link>
            </h2>
            <Card.Description>{project.Description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-neutral-400 transition group-hover:text-teal-500 dark:text-neutral-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.Link.Label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
