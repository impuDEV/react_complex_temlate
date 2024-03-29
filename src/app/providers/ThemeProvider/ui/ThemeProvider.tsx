import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { FC, useMemo, useState } from 'react'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
    || Theme.STANDARD


interface ThemeProviderProps {
	initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const {
		initialTheme,
		children,
	} = props

	const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

	const defaultProps = useMemo(() => ({
		theme,
		setTheme
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider