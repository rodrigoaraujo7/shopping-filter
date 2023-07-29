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

  return (
    <Main>
      <Filter category={categorys} filteredCategorys={setFilteredCategorys} />
      <Catalog filterCategory={filteredCategorys} />
    </Main>
  )
}

export default Products;