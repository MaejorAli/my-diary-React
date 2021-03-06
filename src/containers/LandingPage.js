import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { signup } from '../actions/authActions';
import '../styles/views/LandingPage.scss';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export class LandingPage extends Component {
 state = initialState;

 componentDidUpdate(prevProps) {
   const { signupUser, errorMessage, history } = this.props;
   if (prevProps.signupUser !== signupUser && signupUser) {
     swal('Good job!', 'Signed up Successfully!', 'success');
     setTimeout(() => history.push('/dashboard'), 3000);
   } else if (prevProps.errorMessage !== errorMessage && errorMessage) {
     swal('Error!', 'Something Went Wrong!', 'error');
   }
 }

   handleSubmit = (event) => {
     event.preventDefault();
     const { signup: signupUser, history } = this.props;
     const {
       firstname, lastname, email, password, confirmPassword,
     } = this.state;


     const body = {
       firstname: firstname.trim(),
       lastname: lastname.trim(),
       email: email.trim(),
       password: password.trim(),
     };
     if (!firstname) return swal('Please enter a first name', 'Enter your first name', 'warning');
     if (!lastname) return swal('Please fill in your last name', 'Enter your last name', 'warning');
     if (!email) return swal('Please fill in your email', 'Enter your email', 'warning');
     if (!password) return swal('Please fill in your password', 'Enter your password', 'warning');
     if (!confirmPassword) return swal('Please confirm your password', 'Confirm password', 'warning');
     if (confirmPassword !== password) {
       swal('Passwords do not Match!', 'Please check your password', 'warning');
     } else {
       signupUser(body, () => history.push('/user/profile'));
       this.setState(initialState);
     }
   }

   render() {
     const handleChange = (text, key) => this.setState({ [key]: text });
     const {
       firstname, lastname, email, password, confirmPassword,
     } = this.state;
     return (
       <div className="landing-page-body">
         <header>
           <div id="menu">
             <Link to="/" className="menuitem">Home</Link>
             <Link to="/" className="menuitem">Contact Us</Link>
             <Link to="/auth/signin" className="menuitem">Sign In</Link>
           </div>
         </header>
         <section>
           <div className="content">
             <h1>Welcome to My Diary</h1>
             <p>Simple, classy journal just for you</p>

           </div>

           <article>
             <div className="card card-container">
               <p id="profile-name" className="profile-name-card" />
               <form onSubmit={this.handleSubmit} className="form-signin">
                 <span id="reauth-email" className="reauth-email" />
                 <input type="firstname" value={firstname} id="firstname" className="form form-control" placeholder="First name" onChange={(e) => handleChange(e.target.value, 'firstname')} required />
                 <input type="firstname" value={lastname} id="lastname" className="form form-control" placeholder="Last name" onChange={(e) => handleChange(e.target.value, 'lastname')} required />
                 <input type="email" id="email" value={email} className="form-control" placeholder="Email address" onChange={(e) => handleChange(e.target.value, 'email')} required />
                 <input type="password" id="password" value={password} className="form-control" placeholder="Password" onChange={(e) => handleChange(e.target.value, 'password')} required />
                 <input type="password" id="confirm-password" value={confirmPassword} className="form-control" placeholder="Confirm Password" onChange={(e) => handleChange(e.target.value, 'confirmPassword')} required />
                 <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" id="enter-signup" onClick={this.handleSubmit}>Sign Up</button>
                 <Link to="/auth/signin" className="forgot-password">
                  Already Registered?
                 </Link>
               </form>
               <div id="errors" />
             </div>
           </article>
         </section>
       </div>
     );
   }
}

const mapStateToProps = (state) => ({ signupUser: state.auth.authenticated, errorMessage: state.auth.errorMessage });

export default connect(mapStateToProps, { signup })(LandingPage);
