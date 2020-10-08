import React from 'react';

const BookComponent = ({ id, title, description, onDragStart }) => (
  <div
    className="draggable"
    key={id}
    id={id}
    draggable
    onDragStart={(event) => onDragStart(event)}
  >
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default BookComponent;
