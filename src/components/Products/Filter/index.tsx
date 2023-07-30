import { SetStateAction, Dispatch } from 'react';

import {
  Container,
  Title,
  Flex,
  FilterItem,
  ClearFilter
} from "./styles";

type FilterProps = {
  category: string[],
  filteredCategorys: Dispatch<SetStateAction<string>>
}

const Filter = ({ category, filteredCategorys }: FilterProps) => {
  // filter categorys
  const categorys = category

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
            onClick={() => filteredCategorys(category)}
          />
        ))}

        {/* clear filter */}
        <ClearFilter onClick={() => filteredCategorys('')}>Clear</ClearFilter>
      </Flex>
    </Container >
  )
}

export default Filter;