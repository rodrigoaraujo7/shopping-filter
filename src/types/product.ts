export interface IProductCard {
  name: string,
  price: number,
  imageURL: string,
  productType: 'Hoodies' | 'Pants' | 'T-Shirts' | 'Caps' | 'Crewnecks'
}