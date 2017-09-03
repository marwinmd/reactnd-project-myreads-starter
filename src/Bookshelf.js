import React, {Component} from "react";

import Book from "./Book";

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => <li key={book.title}>{<Book title={book.title} author={book.author} backgroundImageURL={book.backgroundImage}></Book>}</li>)}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Bookshelf