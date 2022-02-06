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
    const place = {
      id: '1',
      name: 'Crato',
      slug: 'crato',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: '2',
      name: 'Juazeiro',
      slug: 'juazeiro',
      location: {
        latitude: 1,
        longitude: 1
      }
    }
    render(<Map places={[place, placeTwo]} />)
    expect(screen.getByTitle(/crato/i)).toBeInTheDocument()
    expect(screen.getByTitle(/juazeiro/i)).toBeInTheDocument()
  })
})
