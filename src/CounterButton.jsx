import React, { useCallback } from 'react'

import './App.css'

const CounterButton = React.memo(({ count, setCount }) => {
	const handleClick = () => {
		setCount(val => ++val)
	}
	return (
		<div>
			<button onClick={handleClick}>+++</button>
			<p>{count}</p>
		</div>
	)
})

export default CounterButton
