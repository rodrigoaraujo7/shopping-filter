export interface IProductCard {
  name: string,
  price: number,
  imageURL: string,
  productType: 'Hoodie' | 'Pants' | 'T-Shirt' | 'Cap' | 'Crewneck'
}