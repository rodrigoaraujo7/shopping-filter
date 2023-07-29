import { useState, useEffect } from 'react'

// components
import ProductCard from "./ProductCard";

// styles
import { CatalogContainer } from './styles'

// types
import { IProductCard } from '../../../types/product';

// data
import { productsData } from '../../../data';

type CatalogProps = {
  filterCategory: string
}

const Catalog: React.FC<CatalogProps> = ({ filterCategory }) => {
  const data = productsData

  let filteredData
  if (filterCategory === '') {
    // remove the filter
    filteredData = data
  } else {
    // apply the filter using props
    filteredData = data.filter(i => i.productType === filterCategory)
  }

  return (
    <CatalogContainer>
      {filteredData.map((product, index) => (
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