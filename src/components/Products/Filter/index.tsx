import { Container, Title, Flex, Button } from "./styles";

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
          <Button type="button" value={category} key={index} />
        ))}
      </Flex>
    </Container>
  )
}

export default Filter;