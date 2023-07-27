import { useState, useEffect } from 'react'

import ProductCard, { IProductCard } from "./ProductCard";

import { CatalogContainer } from './styles'

const Catalog = () => {
  const data: IProductCard[] = [
    {
      name: 'Random Jacket',
      price: 20,
      imageURL: 'https://eadn-wc05-10739759.nxedge.io/wp-content/uploads/2023/03/tshirt-azul-2-sense.jpg',
      productType: 'Jacket'
    },
    {
      name: 'Random Pants',
      price: 40,
      imageURL: 'https://eadn-wc05-10739759.nxedge.io/wp-content/uploads/2023/03/tshirt-azul-2-sense.jpg',
      productType: 'Pants'
    },
    {
      name: 'Random Shoes',
      price: 60,
      imageURL: 'https://eadn-wc05-10739759.nxedge.io/wp-content/uploads/2023/03/tshirt-azul-2-sense.jpg',
      productType: 'Shoes'
    },
  ]

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