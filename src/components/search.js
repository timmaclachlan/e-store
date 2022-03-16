import React from "react";

import { useNavigate } from "react-router-dom";
import { getProductsByQuery } from "../fetcher";

const Search = () => {
  const navigate = useNavigate();

    const [products, setProducts] = React.useState({
        errorMessage: "",
        data: [],
    });

  const handleChange = (ev) => {
    

        const fetchData = async () => {
          const responseObject = await getProductsByQuery(ev.target.value);
          //setProducts(responseObject);
          
          navigate('/search', { state: responseObject} );
        };
        fetchData();
      
    };

    return (
        <div id="search">
            <label>Search</label>
            <input type="text" name="search" onChange={handleChange} />
        </div>
    );
};

export default Search;
