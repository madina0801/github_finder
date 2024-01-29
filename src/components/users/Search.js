import React, { useState } from "react";

const Search = () => {
	const [text, setText] = useState('');
	const onChange = e => {
		setText(e.target.value);
	}

	const onSubmit = e => {
		e.preventDefault();
		// API call
	}
	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input type="text" name="text" value={text} onChange={onChange} placeholder="Search User..."/>
				<input type="submit" value="Search" className="btn btn-dark btn-block"/>
			</form>
		</div>
	)
}

export default Search;