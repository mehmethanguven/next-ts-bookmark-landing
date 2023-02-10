import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import About from '@/pages/about'

describe('Home', () => {
  it('should to match snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders a heading', () => {
    render(<About />)

    const heading = screen.getByRole('heading', {
      name: /about page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
