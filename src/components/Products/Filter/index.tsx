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

const list = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1,
    },
  },
}

const itemList = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Filter = ({ category, filteredCategorys }: FilterProps) => {
  // filter categorys
  const categorys = category

  return (
    <Container>
      <Title>Categorys:</Title>

      <Flex variants={list} initial="hidden" animate="visible">
        {/* automatic alphabetic order */}
        {categorys.sort().map((category, index) => (
          <FilterItem
            type="button"
            value={category}
            key={index}
            onClick={() => filteredCategorys(category)}
            variants={itemList}
          />
        ))}

        {/* clear filter */}
        <ClearFilter onClick={() => filteredCategorys('')} variants={itemList}>Clear</ClearFilter>
      </Flex>
    </Container >
  )
}

export default Filter;