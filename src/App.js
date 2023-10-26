import React, { useState } from 'react';
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";

const initialData = [];

function App() {
  const [users, setUser] = useState(initialData);
  const saveHandler = (user) => {
    // console.log(user);
    setUser((prevUsers) => {return [user, ...prevUsers]});
  }

  return (
    <div>
      <AddUser onSaveUser={saveHandler} initialData={initialData}/>
      {users.length > 0 && <UsersList data={users}/>}
      
    </div>
  );
}

export default App;
