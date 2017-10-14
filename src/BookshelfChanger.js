import React, {Component} from "react";

class BookshelfChanger extends Component {

    changeShelf = (e) => {
        this.props.onReload(e.target.value)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.changeShelf} value={this.props.currentShelf}>
                    <option value="none" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>)
    }
}

export default BookshelfChanger