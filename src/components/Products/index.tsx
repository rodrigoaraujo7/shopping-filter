import { useState, useEffect } from 'react';

import Filter from "./Filter";
import Catalog from "./Catalog";

import { Main } from "./styles";

const Products = () => {
  const categorys = [
    'Tops',
    'Jacket',
    'Sweaters',
    'Shoes',
    'Pants'
  ]

  const [filteredCategorys, setFilteredCategorys] = useState<string>('')

  useEffect(() => {
    console.log(filteredCategorys)
  }, [filteredCategorys])

  return (
    <Main>
      <Filter category={categorys} filteredCategorys={setFilteredCategorys} />
      <Catalog filterCategory={categorys[1]} />
    </Main>
  )
}

export default Products;