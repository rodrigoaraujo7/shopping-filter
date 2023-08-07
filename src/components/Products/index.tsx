import { useState } from 'react';

import Filter from "./Filter";
import Catalog from "./Catalog";

const Products = () => {
  const categorys = [
    'Hoodies',
    'T-Shirts',
    'Pants',
    'Caps',
    'Crewnecks',
    'Shoes'
  ]

  const [filteredCategorys, setFilteredCategorys] = useState<string>('')

  return (
    <>
      <Filter category={categorys} filteredCategorys={setFilteredCategorys} />
      <Catalog filterCategory={filteredCategorys} />
    </>
  )
}

export default Products;