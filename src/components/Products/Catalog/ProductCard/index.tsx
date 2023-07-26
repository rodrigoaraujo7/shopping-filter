import { Container, Image, Description, Price } from './styles'

interface IProductCard {
  name: string,
  price: number,
  imageURL: string
}

const ProductCard = ({ name, price, imageURL }: IProductCard) => {
  return (
    <Container>
      <Image src={imageURL} alt="tshirt" />
      <Description>{name} <Price>${price}</Price></Description>
    </Container>
  )
}

export default ProductCard;