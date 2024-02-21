import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkVariant } from './AppLink'

export default {
	title: 'shared/AppLink',
	component: AppLink,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Text',
	theme: AppLinkVariant.PRIMARY
}
Primary.decorators = [ThemeDecorator(Theme.STANDARD)]

export const Secondary = Template.bind({})
Secondary.args = {
	children: 'Text',
	variant: AppLinkVariant.SECONDARY
}
Secondary.decorators = [ThemeDecorator(Theme.STANDARD)]

export const Red = Template.bind({})
Red.args = {
	children: 'Text',
	variant: AppLinkVariant.RED
}
Red.decorators = [ThemeDecorator(Theme.STANDARD)]

