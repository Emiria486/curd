import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
function App() {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  // 编辑按钮的点击事件
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  // 更新用户
  const updateUser = (id, updateUser) => {
    setEditing(false);
    // 保存更新用户数据
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };
  // 删除用户数据
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  // 添加用户
  const addUser = (user) => {
    user.id = user.length + 1;
    setUsers([...users, user]);
  };
  return (
    <div className="container">
      <h1>Crud app with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              ></EditUserForm>
            </div>
          ) : (
            <div>
              <h2>add user</h2>
              <AddUserForm addUser={addUser}></AddUserForm>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>view users</h2>
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
          ></UserTable>
        </div>
      </div>
    </div>
  );
}

export default App;
