import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { NavBar } from './NavBar'

export default {
	title: 'widget/NavBar',
	component: NavBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />

export const Standard = Template.bind({})
Standard.args = {}
Standard.decorators = [ThemeDecorator(Theme.STANDARD)]

