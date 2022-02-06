import { WindowClose } from '@styled-icons/boxicons-regular'
import LinkWrapper from 'components/LinkWrapper'
import { Role } from 'graphql/generated/graphql'
import * as S from './styles'

type ImageProp = {
  url: string
  height: number
  width: number
}

export type AgentTemplateProps = {
  agent: {
    slug: string
    name: string
    biography: string
    picture: ImageProp
    icon: ImageProp
    location: {
      latitude: number
      longitude: number
    }
    locationName: string
    role: Role
  }
}

export default function AgentTemplate({ agent }: AgentTemplateProps) {
  return (
    <>
      <LinkWrapper href="/">
        <WindowClose size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{agent.name}</S.Heading>
          <S.Body>
            <S.Details>
              <span className="label">{'// Role'}</span>
              <span className="role">{agent.role}</span>
              <span className="label">{'// Biography'}</span>
              <p>{agent.biography}</p>
              <span className="label">{'// Origin'}</span>
              <p>{agent.locationName}</p>
            </S.Details>
            <S.Artwork>
              <img src={agent.picture.url} alt={agent.name} />
            </S.Artwork>
          </S.Body>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
