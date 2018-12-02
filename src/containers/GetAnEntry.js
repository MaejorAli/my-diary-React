import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { getAnEntry } from '../actions/entryActions';
import deleteEntry from '../actions/deleteEntry';


export class GetAnEntry extends Component {
  constructor() {
    super();
    this.deleteEntry = this.deleteEntry.bind(this);
    this.state = {
      entry: {},
      title: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { deleteEntryReducer, entry, history } = this.props;
    if (prevProps.deleteEntryReducer.success !== deleteEntryReducer.success && deleteEntryReducer.success) {
      swal('Good job!', 'Entry Saved Successfully!', 'success');
      setTimeout(() => history.push('/entries'), 3000);
    } else if (prevProps.deleteEntryReducer.error !== deleteEntryReducer.error && deleteEntryReducer.error) {
      swal('Error!', 'Something Went Wrong!', 'error');
    }
    if (prevProps.entry !== entry) this.setState({ title: entry.title });
  }

  componentDidMount() {
    const { match, getAnEntry: getEntry } = this.props;
    const { entryId } = match.params;

    if (entryId) {
      getEntry(entryId);
    }
  }


  static getDerivedStateFromProps(props) {
    return {
      entry: props.entry,
      title: props.entry.title,
    };
  }


  deleteEntry() {
    this.props.deleteEntry(this.state.entry.id);
  }

  render() {
    const { entry, history } = this.props;
    const { title, content } = entry;

    return (
      <div className="get-entry-body">
        <header>
          <div id="menu">
            <Link to="/" className="menuitem">Home</Link>
            <Link to="/" className="menuitem">Profile</Link>
            <Link to="/" className="menuitem">New Entry</Link>
            <Link to="/" className="menuitem">Sign Out</Link>

          </div>
        </header>

        <section>
          <h6 id="date">{new Date().toDateString()}</h6>


          <article>
            <div id="errors" />
            <h1 id="title">{this.state.title}</h1>
            <p id="content">{content}
            </p>

          </article>
        </section>
        <button type="button" id="modifyButton" onClick={() => history.push(`/entries/update/${entry.id}`)}>Modify</button> <button type="button" id="deleteButton" onClick={this.deleteEntry}>Delete</button>


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
  entry: state.entries.entry,
  deleteEntryReducer: state.deleteEntryReducer.status,
});
export default connect(mapStateToProps, {
  getAnEntry, deleteEntry,
})(GetAnEntry);
