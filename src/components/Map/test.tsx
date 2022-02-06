import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)
    screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })
  it('should render with marker in correct place', () => {
    const agent = {
      id: '1',
      name: 'Sage',
      slug: 'sage',
      location: {
        latitude: 0,
        longitude: 0
      },
      icon: {
        url: '/test'
      }
    }
    const agentTwo = {
      id: '2',
      name: 'Cypher',
      slug: 'cypher',
      location: {
        latitude: 1,
        longitude: 1
      },
      icon: {
        url: '/test'
      }
    }
    render(<Map agents={[agent, agentTwo]} />)
    expect(screen.getByTitle(/sage/i)).toBeInTheDocument()
    expect(screen.getByTitle(/cypher/i)).toBeInTheDocument()
  })
})
