import { useState } from "react";

const useInput = (state) => {
	const [value, setValue] = useState(state)

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	return {
		value,
		handleChange
	}
}

export default useInput