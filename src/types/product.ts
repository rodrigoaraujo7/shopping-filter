export interface IProductCard {
  name: string,
  price: number,
  imageURL: string,
  productType: 'Jacket' | 'Pants' | 'Shoes' | 'Sweater' | 'Tops'
}