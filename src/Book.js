import React, {Component} from "react";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";

class Book extends Component {

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${this.props.imageLinks.thumbnail})`
                    }}>
                        <BookshelfChanger currentShelf={this.props.shelf} onReload={(shelf) => this.props.onReload(shelf)}/>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                {this.props.authors && this.props.authors.map((author,index)=>(
                    <div
                        className="book-authors"
                        key={index}
                    >{`${author}`}</div>
                ))}

            </div>
        )
    }
}

Book.propTypes = {
    title: PropTypes.string
}

export default Book