import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GetAgentsQuery } from 'graphql/generated/graphql'
import { GET_AGENTS } from 'graphql/queries'
import HomeTemplate from 'templates/Home'

export default function Home({ agents }: MapProps) {
  return <HomeTemplate agents={agents} />
}

export const getStaticProps = async () => {
  const { agents } = await client.request<GetAgentsQuery>(GET_AGENTS)

  return { props: { agents } }
}
