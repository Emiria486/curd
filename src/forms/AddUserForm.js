// 添加用户表单
import React, { useState } from "react";
const AddUserForm = (props) => {
  // 初始用户state数据
  const initialFormState = { id: null, name: "", username: "" };
  // 设置state Hook
  const [user, setUser] = useState(initialFormState);
  // 利用Onchange实现双向数据绑定
  const handleInputChange = (event) => {
    // 结构赋值
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        // 使用父组件的方法
        props.addUser(user);
        //清空重置表单数据
        setUser(initialFormState);
      }}
    >
      <label>name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>add new user</button>
    </form>
  );
};
export default AddUserForm;
