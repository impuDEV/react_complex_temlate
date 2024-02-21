import { ComponentMeta, ComponentStory } from '@storybook/react'

import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { PageError } from './PageError'

export default {
	title: 'widget/PageError',
	component: PageError,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Standard = Template.bind({})
Standard.args = {}
Standard.decorators = [ThemeDecorator(Theme.STANDARD)]