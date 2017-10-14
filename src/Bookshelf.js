import React, {Component} from "react";
import Book from "./Book";
import {PropTypes} from 'prop-types'


class Bookshelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array,
        onReload: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => <li key={book.id}>{
                            <Book title={book.title}
                                  authors={book.authors}
                                  imageLinks={book.imageLinks}
                                  id={book.id}
                                  shelf={book.shelf}
                                  onReload={(shelf) => this.props.onReload(shelf, book)}
                            ></Book>}</li>)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf