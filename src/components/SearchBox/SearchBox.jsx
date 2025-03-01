import React from "react";

const SearchBox = ({ filter, onFilterChange}) => {
    return (
        <div>
            <input
            type="text"
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
            placeholder="Search contacts"
            />
        </div>
    );
};

export default SearchBox;