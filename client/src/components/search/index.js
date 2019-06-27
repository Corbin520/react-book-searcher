import React from "react"
import "./search.css"

function Search() {
    return (
    <form>
        <div class="form-group">
            <input type="text" class="form-control" id="search-here" aria-describedby="emailHelp" placeholder="Search a book here" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    )
}
export default Search