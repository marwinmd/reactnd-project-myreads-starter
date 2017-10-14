import React, {Component} from "react";
import {Link} from "react-router-dom";
import Bookshelf from "./Bookshelf";
import {PropTypes} from 'prop-types'


class DisplayBooks extends Component {

    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            shelf: PropTypes.string.isRequired,
            imageLinks: PropTypes.object.isRequired,
            authors: PropTypes.arrayOf(PropTypes.string.isRequired),
            id: PropTypes.string.isRequired,
        })),
        onReload: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf title='Currently Reading'
                               books={this.props.books.filter((book) => book.shelf === "currentlyReading")}
                               onReload={(shelf, book) => this.props.onReload(shelf, book)}
                    />
                    <Bookshelf title='Want to Read'
                               books={this.props.books.filter((book) => book.shelf === "wantToRead")}
                               onReload={(shelf, book) => this.props.onReload(shelf, book)}
                    />
                    <Bookshelf title="Read"
                               books={this.props.books.filter((book) => book.shelf === "read")}
                               onReload={(shelf, book) => this.props.onReload(shelf, book)}/>

                    <div className="open-search">
                        <Link to="/Search"/>
                    </div>
                </div>
            </div>  )
    }
}

export default DisplayBooks


