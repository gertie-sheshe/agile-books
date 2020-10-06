import React, { Component } from 'react';
import './demo.scss';

class Demo extends Component {
  state = {
    title: 'Drag me',
    books: [
      {
        id: 1,
        title: 'The Secret Billionaire',
        description:
          '“The Secret Billionaire” is an intriguing young adult mystery/thriller',
        author: 'Teymour Shahabi',
      },
      {
        id: 2,
        title:
          '2084. Artifial Intelligence, The future of humanity, and the God question',
        description:
          'In 2084, scientist and philosopher John C. Lennox addresses the questions of where humanity is going in terms of technological enhancement, bioengineering',
        author: 'John Lennox',
      },
      {
        id: 3,
        title: 'A Girl From Nowhere',
        description:
          'Surrounded by fire, a girl with mysterious powers and a young warrior search for safety.',
        author: 'James Maxwell',
      },
      {
        id: 4,
        title: 'A World of Secrets',
        description:
          "Taimin and Selena must discover the truth about their world--before it's too late",
        author: 'James Maxwell',
      },
    ],
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
        key={book.id}
        id={book.id}
        draggable
        onDragStart={(event) => this.onDragStart(event)}
      >
        <p>{book.title}</p>
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
                <p>34</p>
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
