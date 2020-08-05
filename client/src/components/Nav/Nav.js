import './Nav.css';
import logo from '../Nav/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const pageURI = window.location.pathname + window.location.search;
  const liClassName = props.path === pageURI ? 'nav-item active' : 'nav-item';
  const aClassName = props.disabled ? 'nav-link disabled' : 'nav-link';
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {props.path === pageURI ? (
          <span className="sr-only">(current)</span>
        ) : (
          ''
        )}
      </a>
    </li>
  );
};

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const classDropdownMenu =
      'dropdown-menu' + (this.state.isToggleOn ? ' show' : '');
    return (
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="/"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={(e) => {
            this.showDropdown(e);
          }}>
          {this.props.name}
        </Link>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="logo"
            className="nav-image"
            width="100"
            height="120"
            alignItems="left"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Dropdown */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem id="navitem" path="/" name="Home" />
            <NavItem id="navitem" path="/about" name="About" />
            <NavDropdown id="navitem" name="Menu">
              <Link to="/login" className="dropdown-item">
                Sign In
              </Link>
              <Link className="dropdown-item" to="/register">
                Register
              </Link>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <Link className="dropdown-item" to="/contact">
                Contact
              </Link>
              <Link className="dropdown-item" to="/storeitem">
                TestItem
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/cart">
                Cart
              </Link>
              <Link className="dropdown-item" to="/shoppingcart">
                Shopping Cart
              </Link>
            </NavDropdown>
          </ul>
          {/* Search Bar */}

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              value={this.props.Search}
              onChange={this.props.handleInputChange}></input>

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={this.props.handleFormSubmit}>
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navigation;
