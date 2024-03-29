import cls from './NavBar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
	return (
		<div className={classNames(cls.NavBar, {}, [className])}>
			<div className={cls.links}>
				<AppLink
					variant={AppLinkVariant.SECONDARY}
					to={RoutePath.main}
					className={cls.mainLink}
				>Главная</AppLink>
				<AppLink
					variant={AppLinkVariant.SECONDARY}
					to={RoutePath.about}
					className={cls.mainLink}
				>О нас</AppLink>
			</div>
		</div>
	)
}