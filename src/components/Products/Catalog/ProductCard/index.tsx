import { IProductCard } from '../../../../types/product';
import { Container, Image, Description, Price, Span } from './styles'

const ProductCard = ({ name, price, imageURL, productType }: IProductCard) => {
  return (
    <Container>
      <Image src={imageURL} alt="tshirt" />
      <Span>{productType}</Span>
      <Description>{name}</Description>
      <Price>${price}</Price>
    </Container>
  )
}

export default ProductCard;