import React, { useState, useEffect } from "react";
// 使用生命周期hook，监视props，当props发生更新时执行setUser函数
const EditUserForm = (props) => {
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // 初始用户state数据
  const [user, setUser] = useState(props.currentUser);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // 使用父组件的方法
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};
export default EditUserForm;
