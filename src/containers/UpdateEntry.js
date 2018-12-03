import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import updateEntry from '../actions/updateEntry';
import { getAnEntry } from '../actions/entryActions';

export class UpdateEntry extends Component {
  state = {
    title: '',
    content: '',
  }

  componentDidMount = () => {
    const { getAnEntry: fetchEntry, match } = this.props;
    fetchEntry(match.params.entryId);
  }

  componentDidUpdate(prevProps) {
    const { status, entry, history } = this.props;
    if (prevProps.status.success !== status.success && status.success) {
      swal('Good job!', 'Entry Saved Successfully!', 'success');
      setTimeout(() => history.push('/entries'), 3000);
    } else if (prevProps.status.error !== status.error && status.error) {
      swal('Error!', 'Something Went Wrong!', 'error');
    }
    if (prevProps.entry !== entry) this.setState({ title: entry.title, content: entry.content });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    if (!title) return swal('Please add a title', 'Your entry needs to have a title', 'warning');
    if (!content) { return swal('Please add a content', 'The content of your article cannot be empty!', 'warning'); }
    const { match } = this.props;
    const entryPayload = {
      ...this.state,
    };
    // eslint-disable-next-line react/destructuring-assignment
    this.props.updateEntry(entryPayload, match.params.entryId);
  }

  render() {
    const handleChange = (text, key) => this.setState({ [key]: text });
    const { title, content } = this.state;
    const { error } = this.props;
    if (error) {
      return (
        <div className="error">
          <span>{error}</span>
        </div>
      );
    }
    return (
      <div className="entry-body">
        <header>
          <div id="menu">
            <Link to="/dashboard" className="menuitem">Home</Link>
            <Link to="/entries" className="menuitem">Entries</Link>
            <Link to="/profile" className="menuitem">Profile</Link>
            <Link to="/signout" className="menuitem"> Sign Out</Link>
          </div>
        </header>

        <section>
          <div className="date">
            <h5 id="date">{new Date().toDateString()}</h5>
          </div>


          <article>
            <form>
              <div id="errors" />
              <input type="title" id="title" value={title} className="form form-control" placeholder="Title" onChange={(e) => handleChange(e.target.value, 'title')} />
              <textarea name="message" id="content" value={content} placeholder="Write your story..." onChange={(e) => handleChange(e.target.value, 'content')} />
              <button type="button" id="publishEntry" onClick={this.handleSubmit}>Update</button>
            </form>

          </article>
        </section>


        <footer>
          <div className="container">
     &copy; My Diary 2018
          </div>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = ({
  updateEntryReducer: { status, updatedEntry },
  entries: { entry, entryLoading },
}) => ({
  status,
  updatedEntry,
  entry,
  entryLoading,
});
export default connect(mapStateToProps, { updateEntry, getAnEntry })(UpdateEntry);
