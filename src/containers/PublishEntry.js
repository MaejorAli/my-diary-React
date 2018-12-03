import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import publishEntry from '../actions/publishEntry';

export class PublishEntry extends Component {
  state = {
    title: '',
    content: '',
  }

  componentDidUpdate(prevProps) {
    const { status } = this.props;
    if (prevProps.status.success !== status.success && status.success) {
      swal('Good job!', 'Article Saved Successfully!', 'success');
    } else if (prevProps.status.error !== status.error && status.error) {
      swal('Error!', 'Something Went Wrong!', 'error');
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    if (!title) return swal('Please add a title', 'Your entry needs to have a title', 'warning');
    if (!content) { return swal('Please add a content', 'The content of your article cannot be empty!', 'warning'); }
    const entryPayload = {
      ...this.state,
    };
    // eslint-disable-next-line react/destructuring-assignment
    this.props.publishEntry(entryPayload);
  }

  render() {
    const handleChange = (text, key) => this.setState({ [key]: text });
    const { title, content } = this.state;
    const { error } = this.props;
    if (error) {
      return (
        <div className="no-record centralizer">
          <span>{error}</span>
        </div>
      );
    }
    return (
      <div className="entry-body">
        <header>
          <div id="menu">
            <Link to="/" className="menuitem">Home</Link>
            <Link to="/" className="menuitem">Entries</Link>
            <Link to="/" className="menuitem">Profile</Link>
            <Link to="/" className="menuitem"> Sign Out</Link>
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
              <button type="button" id="publishEntry" onClick={this.handleSubmit}>Publish</button>
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
  publishEntryReducer: { status, publishedEntry, error },
}) => ({
  status,
  publishedEntry,
  error,
});
export default connect(mapStateToProps, { publishEntry })(PublishEntry);
