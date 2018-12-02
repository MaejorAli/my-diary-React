import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { signin } from '../actions/authActions';
import '../styles/views/Signin.scss';


const initialState = {
  email: '',
  password: '',
};

export class Signin extends Component {
 state = initialState;

 componentDidUpdate(prevProps) {
   const { signupUser, errorMessage } = this.props;
   if (prevProps.signupUser !== signupUser && signupUser) {
     swal('Good job!', 'Signed up Successfully!', 'success');
   } else if (prevProps.errorMessage !== errorMessage && errorMessage) {
     swal('Error!', 'Something Went Wrong!', 'error');
   }
 }

   handleSubmit = (event) => {
     event.preventDefault();
     const { signin: signinUser, history } = this.props;
     const { email, password } = this.state;

     if (!email) return swal('Please fill in your email', 'Enter your email', 'warning');
     if (!password) return swal('Please fill in your password', 'Enter your password', 'warning');
     signinUser({ email, password }, () => history.push('/user/profile'));
     this.setState(initialState);
   }

   render() {
     const handleChange = (text, key) => this.setState({ [key]: text });
     const {
       email, password,
     } = this.state;
     return (
       <div className="signin-body">
         <header>
           <div id="menu">
             <Link to="/" className="menuitem">Home</Link>
             <Link to="/" className="menuitem">Contact Us</Link>
             <Link to="/" className="menuitem">Sign Out</Link>
           </div>
         </header>


         <div>

           <div className="card card-container">
             <p id="profile-name" className="profile-name-card">Welcome To My Diary</p>
             <form className="form-signin">
               <span id="reauth-email" className="reauth-email" />
               <input type="email" value={email} id="email" className="form-control" placeholder="Email address" onChange={(e) => handleChange(e.target.value, 'email')} required />
               <input type="password" value={password} id="password" className="form-control" placeholder="Password" onChange={(e) => handleChange(e.target.value, 'password')} required />
               <div id="remember" className="checkbox">
                 <label>
                   <input type="checkbox" value="remember-me" /> Remember me
                 </label>
               </div>
               <button className="btn btn-lg btn-primary btn-block btn-signin" type="button" id="enter-signin" onClick={this.handleSubmit}>Sign in</button>
             </form>
             <div id="errors" />
           </div>
         </div>


       </div>
     );
   }
}

const mapStateToProps = (state) => ({ signupUser: state.auth.authenticated, errorMessage: state.auth.errorMessage });
export default connect(mapStateToProps, { signin })(Signin);
