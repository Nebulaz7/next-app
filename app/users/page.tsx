import React from "react";

interface user {
  id: number;
  name: string;
}

const Userpage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: user[] = await res.json();

  return (
    <div>
      Users
      <p>{new Date().toLocaleTimeString()}</p>
      <div>
        <li>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Userpage;
