import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { addToUsers } from "../../context/usersSlise";

function CreateUser() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let new__user = {
      id: new Date().getTime(),
      name,
      age: +age,
      profession,
      gender,
    };
    dispatch(addToUsers(new__user));
    setName("");
    setProfession("");
    setAge("");
    setGender("");
  };

  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form className="create__user-form" onSubmit={handleSubmit} action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          placeholder="name"
        />
        <input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          type="text"
          required
          placeholder="profession"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          required
          placeholder="age"
        />

        <select
          name=""
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          id=""
          required
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
