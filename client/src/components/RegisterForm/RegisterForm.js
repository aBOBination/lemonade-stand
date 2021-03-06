import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import classnames from 'classnames';
import './RegisterForm.css';

export default function RegisterForm(props) {
  return (
    <div className="wrapper">
      <form className="form-register">
        <h2 className="form-register-heading">Please register</h2>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          required=""
          autofocus=""
          name="firstName"
          error={props.errors.firstName}
          value={props.firstName}
          onChange={props.onChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          required=""
          autofocus=""
          name="lastName"
          error={props.errors.lastName}
          value={props.lastName}
          onChange={props.onChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          required=""
          autofocus=""
          name="userName"
          error={props.errors.userName}
          value={props.userName}
          onChange={props.onChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Image URL"
          required=""
          autofocus=""
          name="imageUrl"
          value={props.imageUrl}
          onChange={props.onChange}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Email Address"
          required=""
          autofocus=""
          name="email"
          error={props.errors.email}
          value={props.email}
          onChange={props.onChange}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required=""
          name="password"
          error={props.errors.password}
          value={props.password}
          onChange={props.onChange}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required=""
          name="password2"
          error={props.errors.password2}
          value={props.password2}
          onChange={props.onChange}
        />

        <button
          // onClick={props.handleRegistration}
          className="btn btn-lg btn-primary btn-block"
          type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
