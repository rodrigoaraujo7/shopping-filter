import { useState, useEffect } from 'react'

// components
import ProductCard from "./ProductCard";

// styles
import { CatalogContainer } from './styles'

// types
import { IProductCard } from '../../../types/product';

// data
import { productsData } from '../../../data';

const Catalog = () => {
  const data = productsData
  const [products, setProducts] = useState<IProductCard[]>([]);

  let productTypeFilter = 'Jacket';
  let count // counter of for loop
  useEffect(() => { // need this hook to previne too many responses
    for (count = 0; count < data.length; count++) {
      setProducts(data.filter(product => product.productType === productTypeFilter))
    }
  }, [count])

  return (
    <CatalogContainer>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          imageURL={product.imageURL}
          productType={product.productType}
        />
      ))}
    </CatalogContainer>
  )
}

export default Catalog;