import { createContext, useCallback, useState } from 'react'
import './App.css'
import SearchInput from './SearchInput'
import ItemList from './ItemList'
import CounterButton from './CounterButton'
import ButtonTheme from './ButtonTheme'
import IconTheme from './ButtonTheme'

export const ThemeContext = createContext()

function App() {
	const array = [
		'apple',
		'banana',
		'cherry',
		'date',
		'elderberry',
		'fig',
		'grape',
		'honeydew',
		'imbe',
		'jackfruit',
		'kiwi',
		'lemon',
		'mango',
		'nectarine',
		'orange',
		'papaya',
		'quince',
		'raspberry',
		'strawberry',
		'tangerine',
		'ugli',
		'vanilla',
		'watermelon',
		'xigua',
		'yellow plum',
		'zucchini',
		'almond',
		'blueberry',
		'cranberry',
		'dragonfruit',
		'eggplant',
		'fennel',
		'gooseberry',
		'hazelnut',
		'indigo',
		'jujube',
		'kumquat',
		'lime',
		'mulberry',
		'olive',
		'peach',
		'quince',
		'rambutan',
		'sapodilla',
		'tomato',
		'umeboshi',
		'voavanga',
		'walnut',
		'yam',
		'zinfandel',
		'avocado',
		'breadfruit',
		'cantaloupe',
		'durian',
		'elderberry',
		'fig',
		'grapefruit',
		'huckleberry',
		'iguana melon',
		'loganberry',
		'mandarin',
		'nectar',
		'persimmon',
		'quince',
		'rice',
		'starfruit',
		'tamarind',
		'ugli fruit',
		'vegetable',
		'wax apple',
		'xanthosoma',
		'yuzu',
		'artichoke',
		'broccoli',
		'cauliflower',
		'dill',
		'endive',
		'fava bean',
		'garlic',
		'horseradish',
		'iceberg lettuce',
		'kale',
		'leek',
		'banana',
		'mushrooms',
		'nettles',
		'onion',
		'peas',
		'radish',
		'spinach',
		'thyme',
		'watercress',
		'yams',
		'zest',
	]
	const [isDark, setIsDark] = useState(false)

	const changeTheme = () => {
		setIsDark(prev => !prev)
	}

	const [count, setCount] = useState(0)
	const [search, setSearch] = useState('')

	const memoizedCount = useCallback(val => setCount(val), [])
	const memoizedSearch = useCallback(val => setSearch(val), [])

	return (
		<ThemeContext.Provider value={{ isDark, changeTheme }}>
			<div className={`${isDark ? 'dark' : 'light'}`}>
				<IconTheme />
				<CounterButton count={count} setCount={memoizedCount} />
				<SearchInput setSearch={memoizedSearch} />
				<ItemList array={array} search={search} />
			</div>
		</ThemeContext.Provider>
	)
}

export default App
