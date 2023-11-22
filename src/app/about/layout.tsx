import { Container } from '@/components/fragments/Container'
import * as React from 'react'

interface IAboutLayoutProps {
  children: React.ReactNode
}

const AboutLayout: React.FunctionComponent<IAboutLayoutProps> = ({
  children,
}) => {
  return <Container className="pt-16 sm:pt-32">{children}</Container>
}

export default AboutLayout
