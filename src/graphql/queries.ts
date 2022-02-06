import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_AGENTS = gql`
  query getAgents {
    agents {
      id
      slug
      name
      biography
      locationName
      location {
        latitude
        longitude
      }
      role
      picture {
        url
        height
        width
      }
      icon {
        url
        height
        width
      }
    }
  }
`
