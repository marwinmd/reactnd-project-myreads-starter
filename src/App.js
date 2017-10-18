import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import {Route} from "react-router-dom";
import DisplayBooks from "./DisplayBooks";
import Search from "./Search"

class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        this.fetchMyBooks()
    }

    fetchMyBooks = () => {
        BooksAPI.getAll().then((books) => this.setState({books}))
    }


    changeShelf = (shelf, book) => {
        BooksAPI.update(book, shelf).then(() => {
            this.fetchMyBooks()
        })
    }


    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <DisplayBooks
                        books={this.state.books}
                        onReload={(shelf, book) => this.changeShelf(shelf, book)}
                    />
                )}/>

                <Route
                    exact
                    path="/search"
                    render={({history}) => (
                        <Search
                            myBooks={this.state.books}
                            onReload={(id, shelf) => {
                                this.changeShelf(id, shelf)
                            }}
                        />
                    )}
                />
            </div>
        )
    }
}

export default BooksApp
