import React from 'react';

const BookComponent = ({ id, title, description, onDragStart }) => (
  <div
    className="draggable"
    key={id}
    id={id}
    draggable
    onDragStart={(event) => onDragStart(event)}
    role="link"
  >
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="https://inclusive-components.design/cards/">
      Inclusive Card Design
    </a>
  </div>
);

export default BookComponent;
