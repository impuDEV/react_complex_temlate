import { render, screen } from '@testing-library/react'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'

describe('Button', () => {

	test('Test render', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})

	test('Test ghost theme', () => {
		render(<Button variant={ButtonVariant.GHOST}>TEST</Button>)
		expect(screen.getByText('TEST')).toHaveClass('ghost')
		screen.debug()
	})
})