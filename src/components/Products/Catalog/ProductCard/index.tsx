import { IProductCard } from '../../../../types/product';
import { Container, Image, Description, Price, Span } from './styles'

// animations
import { DescriptionAnimation, ImageAnimation, PriceAnimation, ProductTypeAnimation } from './animations';

const ProductCard = ({ name, price, imageURL, productType, variants }: IProductCard) => {
  return (
    <Container variants={variants}>
      <Image variants={ImageAnimation} initial="hidden" animate="visible" src={imageURL} alt="tshirt" />
      <Span variants={ProductTypeAnimation} initial="hidden" animate="visible">{productType}</Span>
      <Description variants={DescriptionAnimation} initial="hidden" animate="visible">{name}</Description>
      <Price variants={PriceAnimation} initial="hidden" animate="visible">${price}</Price>
    </Container>
  )
}

export default ProductCard;