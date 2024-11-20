import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { removeFromusers, updateUsers } from "../../context/usersSlise";
import { useDispatch } from "react-redux";
import Modal from "../model/Modal";

function Users({ data }) {
  const [show, setShow] = useState(null);
  const [selectUserId, setSelectUserId] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [prof, setProf] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let new__users = {
      id: selectUserId,
      name,
      age: +age,
      gender,
      profession: prof,
    };
    dispatch(updateUsers(new__users));
    setShow(null);
    setName("");
    setAge("");
    setProf("");
    setGender("");
    setSelectUserId(null);
  };

  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.profession}</p>
          <p>{user.age} years old</p>
          <div className="users__btn">
            <button onClick={() => dispatch(removeFromusers(user))}>
              Remove
            </button>
            <button
              onClick={() => {
                setShow(user.id);
                setSelectUserId(user.id);
                setName(user.name);
                setProf(user.profession);
                setGender(user.gender);
                setAge(user.age);
              }}
            >
              Update
            </button>
          </div>
          {show === user.id && (
            <Modal close={() => setShow(null)}>
              <h2>Update User</h2>
              <form onSubmit={handleSubmit}>
                <h2>Name</h2>
                <input
                  value={name}
                  required
                  placeholder="Name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <h2>Profession</h2>
                <input
                  value={prof}
                  required
                  placeholder="Profession"
                  type="text"
                  onChange={(e) => setProf(e.target.value)}
                />
                <h2>Age</h2>
                <input
                  value={age}
                  required
                  placeholder="Age"
                  type="text"
                  onChange={(e) => setAge(e.target.value)}
                />
                <h2>Gender</h2>
                <select
                  value={gender}
                  required
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
                <br />
                <button type="submit">Update</button>
              </form>
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
}

export default Users;
