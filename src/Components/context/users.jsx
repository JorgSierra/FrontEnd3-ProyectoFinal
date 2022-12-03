import React from "react";
import { useAPI } from "./apiContext";

export default function Users() {
  // Now we can grab the data we want via useAPI, which abstracts useContext()
  const { users } = useAPI();
  return (
    <ul>
      // Now we can use the data from the API in our components
      // ofc this simple example can be adapted to make further calls
      {users.map(u => (
        <li key={u.id}>{u.username}</li>
      ))}
    </ul>
  );
}