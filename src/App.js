import './App.css';
import React from 'react';

import {useCategories, useProducts } from './hooks/useFetch';

import Category from './components/category';

function App() {
  const { data: categories, loading, error} = useCategories();
  const { data : products } = useProducts();
  
  //const [products, setProducts] = React.useState([]);

  const handleCategoryClick = (id) => {
    debugger;
   // getProducts('http://localhost:3001/products?catId=' + id);
  };

  const RenderProducts = () => {
    return products.map(p => 
      <div>{p.title}</div>
    )
  }
  const RenderCategories = () => {
    return categories.map((d) => (
      <Category
        id={d.id}
        key={d.id}
        title={d.title}
        onCategoryClick={() => handleCategoryClick(d.id)}
      />
    ));
  };

  return (
    <>
      <header>Our Store</header>
      <section>
        <nav>
          {loading && <div>Please wait!</div>}
          {error && <div>{`Error loading categories ${error}`}</div>}
          <ul>
            {categories && RenderCategories()}
          </ul>
        </nav>

        <main>
          {products && RenderProducts()}
        </main>
      </section>

      <footer>something</footer>
    </>
  );
}

export default App;
