import React, { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import { getProductsByQuery } from "../fetcher";

import CategoryProduct from "./categoryProduct";

const SearchResults = () => {
    const [products, setProducts] = React.useState({
        errorMessage: "",
        data: [],
    });

    let [searchParams ] = useSearchParams();
    let query = searchParams.get("s");

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductsByQuery(query);
            setProducts(responseObject);
        };
        fetchData();
    }, [query]);

    const renderProducts = () => {
        return products.data.map((p) => (
            <CategoryProduct key={p.id} {...p}>
                {p.title}
            </CategoryProduct>
        ));
    };


    return <div>
        {products.errorMessage && <div>Error: {products.errorMessage}</div>}

        {products.data && renderProducts()}
    </div>;
};

export default SearchResults;
