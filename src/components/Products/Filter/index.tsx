import { useState, useEffect } from 'react';

import Footer from "./Footer";
import {
  Container,
  Title,
  Flex,
  FilterItem,
  ClearFilter
} from "./styles";

const Filter = () => {
  // filter categorys
  const categorys = [
    'Tops',
    'Jackets',
    'Sweaters',
    'Shoes',
    'Pants'
  ]

  const [filteredCategorys, setFilteredCategorys] = useState<string>('')

  useEffect(() => {
    console.log(filteredCategorys)
  }, [filteredCategorys])

  return (
    <Container>
      <Title>Categorys:</Title>

      <Flex>
        {/* automatic alphabetic order */}
        {categorys.sort().map((category, index) => (
          <FilterItem
            type="button"
            value={category}
            key={index}
            onClick={() => setFilteredCategorys(category)}
          />
        ))}

        {/* clear filter */}
        <ClearFilter onClick={() => setFilteredCategorys('')}>Clear</ClearFilter>
      </Flex>

      <Footer />
    </Container >
  )
}

export default Filter;