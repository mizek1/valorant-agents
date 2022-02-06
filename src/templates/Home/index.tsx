import { InfoSquare } from '@styled-icons/boxicons-regular'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ agents }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoSquare size={32} aria-label="About" />
      </LinkWrapper>
      <Map agents={agents} />
    </>
  )
}
