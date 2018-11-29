import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class LandingPage extends Component {
  render() {
    return (
      <body>
        <div>
          <header>
            <div id="menu">
              <Link to="/" className="menuitem">Home</Link>
              <Link to="/" className="menuitem">Contact Us</Link>
              <Link to="/" className="menuitem">Sign In</Link>
            </div>
          </header>
          <section>
            <div className="content">
              <h1>Welcome to My Diary</h1>
              <p>Simple, classy journal just for you</p>

            </div>

            <article>
              <div className="card card-container">
                <p id="profile-name" className="profile-name-card">Welcome To My Diary</p>
                <form className="form-signin">
                  <span id="reauth-email" className="reauth-email" />
                  <input type="firstname" id="firstname" className="form form-control" placeholder="First name" required />
                  <input type="firstname" id="lastname" className="form form-control" placeholder="Last name" required />
                  <input type="email" id="email" className="form-control" placeholder="Email address" required />
                  <input type="password" id="password" className="form-control" placeholder="Password" required />
                  <input type="password" id="confirm-password" className="form-control" placeholder="Confirm Password" required />
                  <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" id="enter-signup">Sign Up</button>
                  <Link to="/" className="forgot-password">
                  Already Registered?
                  </Link>
                </form>
                <div id="errors" />
              </div>
            </article>
          </section>
        </div>
      </body>
    );
  }
}


export default (LandingPage);
