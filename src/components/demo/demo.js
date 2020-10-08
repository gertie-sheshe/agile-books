import React, { Component } from 'react';
import { books } from './demo-data';
import BookDemo from '../book-demo/BookDemo';
import SettingsDemo from '../settings-demo/SettingsDemo';
import ColumnDemo from '../column-demo/ColumnDemo';
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
      <BookDemo
        id={book.id}
        title={book.title}
        description={book.description}
        onDragStart={this.onDragStart}
      />
    ));
  };

  render() {
    return (
      <div className="sections">
        <SettingsDemo length={this.state.books.length} />
        <div className="section section-to-read">
          <ColumnDemo
            books={this.state.books}
            renderBooks={this.renderBooks}
            title={`To Read`}
            description={`Pick your next title :)`}
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
          />
        </div>
        <div className="section section-reading">
          <ColumnDemo
            title={`Reading`}
            description={`You are currently enjoying :)`}
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
          />
        </div>
        <div className="section section-onhold">
          <ColumnDemo
            title={`On Hold`}
            description={`Uh Oh, you did not like?`}
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
          />
        </div>
        <div className="section section-done">
          <ColumnDemo
            title={`Done`}
            description={`One more book down!`}
            onDrop={this.onDrop}
            onDragOver={this.onDragOver}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
