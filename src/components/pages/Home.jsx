import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateUser } from "../../store/actions/userActions";

function Home(props) {
  const [userInfo, setInfo] = useState({
    id: props.id,
    username: props.userName,
    firstName: props.firstName,
    lastName: props.lastName,
    email: props.email,
  });

  const onChangeHandler = (e) => {
    
    setInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    props.updateUser(userInfo);
  };

  const tempSubmit = () => {
    console.log(userInfo)
    props.updateUser(userInfo);
  }

  return (
    <div className="center">
      <h1>Hello from home</h1>
      <h1> {userInfo.username}</h1>
      <h2> {userInfo.firstName}</h2>
      <h2> {userInfo.lastName}</h2>
      <h2> {userInfo.email}</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          onChange={onChangeHandler}
          placeholder="Username"
        ></input>
        <input
          type="text"
          name="firstName"
          onChange={onChangeHandler}
          placeholder="First Name"
        ></input>
        <input
          type="text"
          name="lastName"
          onChange={onChangeHandler}
          placeholder="Last Name"
        ></input>
        <input
          type="text"
          name="email"
          onChange={onChangeHandler}
          placeholder="Email"
        ></input>
        <input type="submit" value="submit" />
      </form>
      <button onClick={tempSubmit}> Subss</button>
    </div>
  );
}

Home.propTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ User }) => ({
  id: User.id,
  userName: User.username,
  firstName: User.firstName,
  lastName: User.lastName,
  email: User.email,
});

// const mapDispatchToProps = {
//   updateUser
// };

export default connect(mapStateToProps, {updateUser})(Home);
