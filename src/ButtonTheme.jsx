import React, { createContext, useContext, useState } from 'react'
import { ThemeContext } from './App'
// import { themeIcons } from './assets'
import { themeIcons } from './assets'

const IconTheme = () => {
	const { isDark, changeTheme } = useContext(ThemeContext)
	return (
		<img
			src={isDark ? themeIcons.dark : themeIcons.light}
			width={30}
			alt={'theme'}
			onClick={changeTheme}
		/>
	)
}

export default IconTheme
