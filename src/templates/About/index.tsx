import { WindowClose } from '@styled-icons/boxicons-regular'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <WindowClose size={32} aria-label="Close" />
    </LinkWrapper>
    <S.Heading>Valorant Agents</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        cumque totam, amet maiores reiciendis reprehenderit culpa non labore, ad
        commodi aperiam aliquam nisi, dolorem excepturi quasi saepe unde
        temporibus explicabo?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
