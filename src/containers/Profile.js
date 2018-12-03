import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEntries } from '../actions/entryActions';
import updateProfileImage from '../actions/updateProfileImage';
import profilephoto from '../assets/profilephoto.png';
import getProfile from '../actions/profile';
import EntryList from './EntryList';

export class Profile extends Component {
state = {
  image: '',
}

  componentDidMount = () => {
    const { getUserProfile, getAllEntries } = this.props;
    getUserProfile();
    getAllEntries();
  }

  handleSubmit = (e) => {
    const file = e.target.files[0];
    const image = new FormData();
    image.append('image', file);
    // eslint-disable-next-line react/destructuring-assignment
    this.props.updateImage(image);
  }

  render() {
    const { gottenProfile, entries } = this.props;
    return (
      <div className="profile-body">
        <header>
          <div id="menu">
            <Link to="/dashboard" className="menuitem">Home</Link>
            <Link to="/entries" className="menuitem">Entries</Link>
            <Link to="/entries/create" className="menuitem">New Entry</Link>
            <Link to="/" className="menuitem">Sign Out</Link>
          </div>
        </header>

        <div className="user-profile">
          <img className="avatar" id="image" src={gottenProfile.userimage || profilephoto} alt="Ali" />
          <div className="username" id="username">{gottenProfile.firstname} {gottenProfile.lastname}</div>
          <div className="email" id="email">{gottenProfile.email}</div>
          <h4>Published Stories <span id="entryCount" />{entries.length}</h4>
        </div>
        <section>
          <div className="part">
            <div className="image-upload">
              <label htmlFor="file-input">
                <h5>Change Profile Picture</h5>
              </label>
              <input id="file-input" type="file" onChange={this.handleSubmit} />
            </div>
          </div>
          <div id="errors" />
          <article>
            <h1>My Top Stories</h1>
            <div className="entry">
              {
                entries.slice(0, 3).map((entry) => <EntryList key={entry.id} {...entry} {...this.props} />)
              }
            </div>
          </article>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({
  profileReducer: { status, gottenProfile },
  updateProfileImageReducer: { statuss, updatedImage },
  entries: { entries, entryLoading },
}) => ({
  status,
  statuss,
  gottenProfile,
  updatedImage,
  entries,
  entryLoading,
});

export default connect(mapStateToProps, {
  getUserProfile: () => getProfile(),
  getAllEntries: () => getEntries(),
  updateImage: (data) => updateProfileImage(data),
})(Profile);
