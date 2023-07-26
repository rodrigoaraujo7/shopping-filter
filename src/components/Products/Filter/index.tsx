import Footer from "./Footer";
import {
  Container,
  Title,
  Flex,
  FilterItem
} from "./styles";

import * as Tooltip from '@radix-ui/react-tooltip';

const Filter = () => {
  // filter categorys
  const categorys = [
    'Tops',
    'Jackets',
    'Sweaters',
    'Shoes',
    'Pants'
  ]

  return (
    <Container>
      <Title>Category:</Title>

      <Flex>
        {/* automatic alphabetic order */}
        {categorys.sort().map((category, index) => (
          <FilterItem type="button" value={category} key={index} />
        ))}
      </Flex>

      <Footer />
    </Container >
  )
}

export default Filter;