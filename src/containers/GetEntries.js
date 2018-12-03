import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    return (
      <div className="entry-body">
        <header>

          <div id="menu">
            <Link to="/dashboard" className="menuitem">Home</Link>
            <Link to="/profile" className="menuitem">Profile</Link>
            <Link to="/entries/create" className="menuitem">New Entry</Link>
            <Link to="/signout" className="menuitem">Sign Out</Link>
          </div>
        </header>
        <h1>My Stories</h1>
        <div id="errors" />
        <div className="entry">
          {
            entries.map((entry) => <EntryList key={entry.id} {...entry} {...this.props} />)
          }

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  entries: state.entries.entries,
});

export default connect(mapStateToProps,
  { getAllEntries: () => getEntries() })(GetEntries);
