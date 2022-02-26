import './App.css';
import React from 'react';

import { fetcher, getCategories, getProducts } from './fetcher';

import Category from './components/category';
import CategoryProduct from './components/categoryProduct';

import Category from './components/category';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: [] });
  const [products, setProducts] = useState({errorMessage: '', data: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();    
    
  }, [])

  const handleCategoryClick = id => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();    
    
  }

  const renderCategories = () => {
    return categories.data.map(c =>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)} />
    );
  }

  const renderProducts = () => {
    return products.data.map(p => <CategoryProduct {...p}>{p.title}</CategoryProduct>);
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
          {categories.errorMessage && <div>Error: {categories.errorMessage}</div>}

        { categories.data && renderCategories()}
        </nav>  
        <main>

          {products.errorMessage && <div>Error: {products.errorMessage}</div>}

          { products.data && renderProducts()}
        </main>
      </section>

      <footer>something</footer>
    </>
  );
}

export default App;
