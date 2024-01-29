import React, { useState } from "react";
import {
 Route,
 createBrowserRouter,
 createRoutesFromElements,
 RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Repos from "./components/Repos";
import RepoItem from "./components/RepoItem";
import List from "./components/List";

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route>
   <Route path="/" element={<User />} />
   <Route path="user/:login" element={<User />} />
   <Route path="user/:login/:repos" element={<Repos />} />
  </Route>
 )
);

function App() {
 const [users, setUsers] = useState([
  "User1",
  "User2",
  "User3",
  "User4",
  "User5",
 ]);

 const [newUser, setNewUser] = useState("");
 const handleAddUser = () => {
  setUsers([...users, newUser]);
  setNewUser("");
 };
 return (
  <>
  <Navbar />
  <RouterProvider router={router}/>
  <div>
   <h1>User List</h1>
   <List items={users} />
   <div>
    <label htmlFor="small-input">Enter User</label>
    <input type="text" id="small-input" />
   </div>
   <button type="button">Add user</button>
  </div>
  </>
 );
}

export default App;
