import { Container, Image, Description, Price, Span } from './styles'

export interface IProductCard {
  name: string,
  price: number,
  imageURL: string,
  productType: 'Jacket' | 'Pants' | 'Shoes' | 'Sweater' | 'Tops'
}

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