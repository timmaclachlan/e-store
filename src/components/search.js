import React from "react";

import { useNavigate } from "react-router-dom";


const Search = () => {
  const navigate = useNavigate();



  const handleChange = (ev) => {
    

    navigate('/search?s=' + ev.target.value);
    
    
    };

    return (
        <div id="search">
            <label>Search</label>
            <input type="text" name="search" onChange={handleChange} />
        </div>
    );
};

export default Search;
