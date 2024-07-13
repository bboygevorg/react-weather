import React, { useContext, ChangeEvent, useState } from "react";
import { SearchRadioContext } from "../../context/SearchContext";

const Search: React.FC = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchRadioContext);
  const [searchElement, setSearchElement] = useState<string>("");

  const handleSearchInputChange = () => {
    setSearchQuery(searchElement);
    setSearchElement("");
  };

  return (
    <div>
      <input
        type="text"
        value={searchElement}
        onChange={(e) => setSearchElement(e.target.value)}
      />
      <button style={{ cursor: "pointer" }} onClick={handleSearchInputChange}>
        SearchCity
      </button>
    </div>
  );
};

export default Search;
