import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import swal from 'sweetalert';
import { connect } from 'react-redux';
import EntryList from './EntryList';
import { getEntries } from '../actions/entryActions';


export class GetEntries extends Component {
  componentDidMount() {
    const { getAllEntries } = this.props;
    getAllEntries();
  }


  render() {
    const { entries } = this.props;
    // const listEntries = entries.map((entry) => {
    //  <h2>{entry.title}</h2>;
    // });

    // const { title } = entries;
    return (
      <div className="entry-body">
        <header>

          <div id="menu">
            <Link to="/" className="menuitem">Home</Link>
            <Link to="/" className="menuitem">Profile</Link>
            <Link to="/" className="menuitem">New Entry</Link>
            <Link to="/" className="menuitem">Sign Out</Link>
          </div>
        </header>
        <h1>My Stories</h1>
        <div id="errors" />
        <div className="entry">
          {
            entries.map((entry) => <EntryList key={entry.id} {...entry} {...this.props} />)
          }

        </div>

        <footer>
          <div className="container">
     &copy; My Diary 2018
          </div>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  entries: state.entries.entries,
});

export default connect(mapStateToProps,
  { getAllEntries: () => getEntries() })(GetEntries);
