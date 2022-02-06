import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
  font-family: 'Khand';
`

export const Container = styled.div`
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: calc(var(--large) * 3);
  text-transform: uppercase;
  color: var(--highlight);
  margin-bottom: 0;
`

export const Body = styled.div`
  margin-bottom: var(--large);
  display: flex;
  justify-content: space-between;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--medium);
  text-transform: uppercase;
  font-weight: bold;
  gap: var(--small);

  .role {
    font-size: var(--large);
  }

  p {
    font-weight: normal;
    text-transform: none;
    max-width: 40vh;
  }
`

export const Artwork = styled.div`
  @media (min-width: 768px) {
    img {
      top: 20px;
      right: 0;
      max-height: 100vh;
      position: fixed;
    }
  }
`
