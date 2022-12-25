import React from "react";
const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <button
              className="button muted-button"
              // 使用父组件传递的方法
              onClick={() => props.editRow(user)}
            >
              Edit
            </button>
            <button
              className="button muted-button"
              // 使用父组件传递的方法
              onClick={() => props.deleteUser(user.id)}
            >
              delete
            </button>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>no users</td>
        </tr>
      )}
    </tbody>
  </table>
);
export default UserTable;
