import React, { Component } from 'react';
import { books } from './demo-data';
import './demo.scss';

class Demo extends Component {
  state = {
    title: 'Drag me',
    books: books ? books : [],
  };

  onDragOver = (event) => {
    event.preventDefault();
  };

  onDragStart = (event) => {
    event.dataTransfer.setData('id', event.target.id);
  };

  onDrop = (event) => {
    let data = event.dataTransfer.getData('id');
    event.target.appendChild(document.getElementById(data));
  };

  renderBooks = (books) => {
    return books.map((book) => (
      <div
        className="draggable"
        key={book.id}
        id={book.id}
        draggable
        onDragStart={(event) => this.onDragStart(event)}
      >
        <h4>Title: {book.title}</h4>
        <p>Description: {book.description}</p>
      </div>
    ));
  };

  render() {
    return (
      <div className="sections">
        <div className="section-settings">
          <div className="image-section">
            <img alt="user profile" src={require('./user.jpg')} />
          </div>
          <div className="user-description">
            <p>Jane Doe</p>
            <p>Author</p>
          </div>
          <div className="book-data">
            <p>YOUR BOOKS</p>
            <div className="book-totals">
              <div>
                <p>TOTAL</p>
                <p>{this.state.books.length}</p>
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
        <div className="section section-to-read">
          <div className="section-title">
            <h3>To Read</h3>
            <p>Pick your next title :) </p>
          </div>
          <div
            onDrop={(event) => this.onDrop(event)}
            onDragOver={(e) => this.onDragOver(e)}
            className="body-section"
          >
            {this.renderBooks(this.state.books)}
          </div>
        </div>
        <div className="section section-reading">
          <div className="section-title">
            <h3>Reading</h3>
            <p>You are currently enjoying :)</p>
          </div>
          <div
            onDrop={(event) => this.onDrop(event)}
            onDragOver={(e) => this.onDragOver(e)}
            className="body-section"
          ></div>
        </div>
        <div className="section section-onhold">
          <div className="section-title">
            <h3>On Hold</h3>
            <p>Uh Oh, you did not like?</p>
          </div>
          <div
            onDrop={(event) => this.onDrop(event)}
            onDragOver={(e) => this.onDragOver(e)}
            className="body-section"
          ></div>
        </div>
        <div className="section section-done">
          <div className="section-title">
            <h3>Done</h3>
            <p>One more book down!</p>
          </div>
          <div
            onDrop={(event) => this.onDrop(event)}
            onDragOver={(e) => this.onDragOver(e)}
            className="body-section"
          ></div>
        </div>
      </div>
    );
  }
}

export default Demo;
