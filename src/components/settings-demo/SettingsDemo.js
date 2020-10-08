import React from 'react';

const SettingsDemo = ({ length }) => (
  <div className="section-settings">
    <div className="image-section">
      <img alt="user profile" src={require('./user.jpg')} />
    </div>
    <div className="user-description">
      <p>Jane Doe</p>
      <p>Author</p>
    </div>
    <div className="book-data">
      <p className="book-text">YOUR BOOKS:</p>
      <div className="book-totals">
        <div>
          <p>TOTAL</p>
          <p>{length}</p>
        </div>
        <div>
          <p>READING</p>
          <p>24</p>
        </div>
        <div>
          <p>DONE</p>
          <p>10</p>
        </div>
      </div>
    </div>
  </div>
);

export default SettingsDemo;
