import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";
import {debounce} from "throttle-debounce"

export default class SearchPage extends Component {

    state = {
        books: [],
        query: ''
    }

    mergeArr = (arr, Arr) => {
        return arr.map((item) => {
            Arr.forEach((Item) => {
                if (Item.id === item.id) {
                    item.shelf = Item.shelf
                    return
                }else{
                    item.shelf = 'none'
                }
            })
            return item
        })
    }

    updateQuery = (event) => {
        const value = event.target.value.trim()
        this.setState({query: value})
        this.searchData(value)
    }

    searchData = (value) => {
        if (value.length !== 0) {
            debounce(200, BooksAPI.search(value, 10).then((books) => {
                if (books.length > 0) {
                    books = books.filter((book) => book.imageLinks)
                    books = this.mergeArr(books, this.props.myBooks)
                    this.setState({books})
                }
                else {
                    this.setState({books: []})
                }
            }))
        } else {
            this.setState({books: [], query: ''})
        }
    }

    static propTypes = {
        myBooks: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            shelf: PropTypes.string.isRequired,
            imageLinks: PropTypes.object.isRequired,
            authors: PropTypes.arrayOf(PropTypes.string.isRequired),
            id: PropTypes.string.isRequired
        })),
        onReload: PropTypes.func.isRequired
    }

    render() {
        const books = this.state.books
        const query = this.state.query
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text"
                                   placeholder="Search by title or author"
                                   value={query}
                                   onChange={this.updateQuery}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
                {this.state.query !== '' && books.length > 0 && (<Bookshelf title="Search Results" books={books}
                                                                            onReload={(shelf, book) => this.props.onReload(shelf, book)}/>)}
            </div>
        )
    }
}