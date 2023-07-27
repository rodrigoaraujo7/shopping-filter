import { IProductCard } from '../../../../types/product';
import { Container, Image, Description, Price, Span } from './styles'

const ProductCard = ({ name, price, imageURL, productType }: IProductCard) => {
  return (
    <Container>
      <Image src={imageURL} alt="tshirt" />
      <Description>{name} <Price>${price}</Price></Description>
      <Span>{productType}</Span>
    </Container>
  )
}

export default ProductCard;