import ProductCard from "./ProductCard";

import { CatalogContainer } from './styles'

const Catalog = () => {
  return (
    <CatalogContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(product => (
        <ProductCard name="T-Shirt" price={85} imageURL="https://eadn-wc05-10739759.nxedge.io/wp-content/uploads/2023/03/tshirt-azul-2-sense.jpg" />
      ))}
    </CatalogContainer>
  )
}

export default Catalog;