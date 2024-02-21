import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ButtonSize, ButtonVariant } from './Button'
import 'app/styles/index.scss'

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Text'
}

export const Ghost = Template.bind({})
Ghost.args = {
	children: 'Text',
	variant: ButtonVariant.GHOST
}

export const GhostInverted = Template.bind({})
GhostInverted.args = {
	children: 'Text',
	variant: ButtonVariant.GHOST_INVERTED
}

export const Outline = Template.bind({})
Outline.args = {
	children: 'Text',
	variant: ButtonVariant.OUTLINE
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
	children: 'Text',
	variant: ButtonVariant.OUTLINE,
	size: ButtonSize.L
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
	children: 'Text',
	variant: ButtonVariant.OUTLINE,
	size: ButtonSize.XL
}

export const Background = Template.bind({})
Background.args = {
	children: 'Text',
	variant: ButtonVariant.BACKGROUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
	children: 'Text',
	variant: ButtonVariant.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
	children: '>',
	variant: ButtonVariant.BACKGROUND,
	square: true,
}

export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
	children: '>',
	variant: ButtonVariant.BACKGROUND_INVERTED,
	square: true,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
	children: '>',
	variant: ButtonVariant.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
	children: '>',
	variant: ButtonVariant.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL,
}

export const Disabled = Template.bind({})
Disabled.args = {
	children: 'Text',
	variant: ButtonVariant.OUTLINE,
	disabled: true,
}
