import React, { useCallback, useRef } from 'react'

import './App.css'
const SearchInput = React.memo(({ setSearch }) => {
	const searchInput = e => {
		setSearch(e.target.value)
	}

	return (
		<div>
			<input type='text' onChange={searchInput} />
		</div>
	)
})

export default SearchInput
