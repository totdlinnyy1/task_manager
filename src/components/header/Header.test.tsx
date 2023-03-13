import {expect, test} from '@jest/globals'
import {render, screen} from '@testing-library/react'

import Header from './Header'

test('Render Header of main page', () => {
  render(<Header />)
  const logo = screen.getByText('Лого')
  const loginButton = screen.getByText('Войти')
  // @ts-ignore
  expect(logo).toBeInTheDocument()
  // @ts-ignore
  expect(loginButton).toBeInTheDocument()
})
