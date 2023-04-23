import { Search } from "react-basicons";
import "./SearchBar.css";

import React from 'react'

const SearchBar = () => {
  return (
    <div className="search-box">
        <form action="" className="search-bar">
            <Search />
            <input type="text" placeholder="Search 326 icons" />
        </form>
    </div>
  )
}

export default SearchBar;