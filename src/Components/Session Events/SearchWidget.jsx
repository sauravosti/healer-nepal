import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { IoSearchOutline } from "react-icons/io5";
import "../../assets/css/SearchWidget.css";

const SearchWidget = ({ setSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const debouncedSearch = debounce((searchTerm) => {
      setSearch(searchTerm);
    }, 500);

    debouncedSearch(query);

    return () => {
      debouncedSearch.cancel();
    };
  }, [query, setSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(query);
  };

  const handleIconClick = () => {
    setSearch(query);
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSearch} className="p-2">
        <div className="row g-0 align-items-center">
          <div className="col-12 col-sm-8 col-lg-12 col-md-10 position-relative">
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={handleChange}
              name="text"
              className="form-control search-input w-100"
              autoComplete="off"
              required
            />
            <div className="search-icon-container" onClick={handleIconClick}>
              <IoSearchOutline className="search-icon" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchWidget;
