import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../actions/authActions';

export class SignOut extends Component {
  componentDidMount() {
    const { signOutUser } = this.props;
    signOutUser();
  }

  render() {
    return (
      <div className="sign-out">
        <header>
          <div id="menu">
            <Link to="/" className="menuitem">Home</Link>
            <Link to="/" className="menuitem">Contact Us</Link>
            <Link to="/auth/signin" className="menuitem">Sign In</Link>
          </div>
        </header>

        <div className="center">
          <h1>Thank you for visiting!</h1>
          <Link to="/auth/signin"><button type="button">Sign In</button></Link>
        </div>


      </div>

    );
  }
}

const mapStateToProps = (state) => ({ signupUser: state.auth.authenticated, errorMessage: state.auth.errorMessage });
export default connect(mapStateToProps, { signOutUser: () => signout() })(SignOut);
