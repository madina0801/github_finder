import dotenv from 'dotenv';

import React, { useEffect, useState } from "react";
import axios from "axios";

import UserList from "./UserList";
import Search from './Search';

import Spinner from "../Spinner";

dotenv.config();

const Users = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = query => {
		setSearchQuery(query);
	}

	const fetchUsers = async () => {
		setLoading(true);
		try {
			const response = await axios.get('https://api.github.com/users?q=${text}&client_id=${dotenv.process.GITHUB_CLIENT_ID}&client_secret=${dotenv.process.GITHUB_CLIENT_SECRET}');
			setUsers(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div>
			<Search onSearch={handleSearch} />
			{loading ? (<Spinner />) : <UserList users={users} />}
		</div>
	)
};

export default Users;