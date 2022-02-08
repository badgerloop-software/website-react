// App.test.js
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../App' // eslint-disable-line no-unused-vars

test('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
