import { InfoSquare } from '@styled-icons/boxicons-regular'
import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoSquare size={32} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>
  )
}
