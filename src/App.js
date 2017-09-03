import React from "react";
 import * as BooksAPI from './BooksAPI'
import "./App.css";
import {Route} from "react-router-dom";
import DisplayBooks from "./DisplayBooks";
import Search from "./Search";

class BooksApp extends React.Component {
    state = {
    }
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={DisplayBooks}/>
                <Route path="/Search" component={Search}/>
            </div>
        )
    }
}
export default BooksApp
