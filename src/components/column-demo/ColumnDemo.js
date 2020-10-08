import React, { Fragment } from 'react';

const ColumnDemo = ({
  title,
  description,
  onDragOver,
  onDrop,
  renderBooks,
  books,
}) => (
  <Fragment>
    <div className="section-title">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div
      onDrop={(event) => onDrop(event)}
      onDragOver={(e) => onDragOver(e)}
      className="body-section"
    >
      {renderBooks ? renderBooks(books) : null}
    </div>
  </Fragment>
);

export default ColumnDemo;
