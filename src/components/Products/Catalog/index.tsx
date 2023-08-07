// components
import ProductCard from "./ProductCard";

// styles
import { CatalogContainer } from './styles'

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

  // console.table(filteredData)
  console.table(filteredData.length)

  return (
    <CatalogContainer>
      {filteredData.length !== 0 ? (
        filteredData.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            imageURL={product.imageURL}
            productType={product.productType}
          />
        ))
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1>No products to display!</h1>
        </div>
      )}
    </CatalogContainer>
  )
}

export default Catalog;