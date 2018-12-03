import React from 'react';

const dateType = (date) => {
  const parsedDate = new Date(date);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const entryDate = `${months[parsedDate.getMonth()]} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`;
  return entryDate;
};

const EntryList = (props) => (
      <>
        <div className="entry-description" id="entries">
          <ul>
            <li>
              <h2>{props.title}</h2>
            </li>

            <li>
              <p>{dateType(props.createdat)}</p>
            </li>
            <li>
              <button type="button" id="entries" onClick={() => props.history.push(`/entries/${props.id}`)}>Read More</button>
            </li>
          </ul>
        </div>
      </>
);

export default EntryList;
