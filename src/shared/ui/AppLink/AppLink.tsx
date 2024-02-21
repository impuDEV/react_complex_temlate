import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { memo, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AppLinkVariant {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red',
}

interface AppLinkProps extends LinkProps {
	className?: string
	variant?: AppLinkVariant
	children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		variant = AppLinkVariant.PRIMARY,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[variant]])}
			{...otherProps}
		>
			{children}
		</Link>
	)
})
