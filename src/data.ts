import { IProductCard } from "./types/product";

import {
  cap3PanelBeige,
  cap3PanelBlack,
  cap3PanelInversoBlack,
  capClassicPipaBlack,
  capClassicPipaRoyalBlue,
  capClsGray,
  crewneckClsBrown,
  crewneckClsGray,
  hoodieClassInversoBlack,
  hoodieClassInversoGreen,
  hoodieClassInversoRed,
  hoodieClsBlack,
  pantsFiletagemBlackJeans,
  pantsPaladioGreen,
  pantsPaladioOffwhite,
  tshirtClassInverso,
  tshirtClsGreen,
  tshirtPipaRed,
} from './assets/images'

export const productsData: IProductCard[] = [
  {
    name: 'Hoodie "Class Inverso" Red',
    price: 449,
    imageURL: hoodieClassInversoRed,
    productType: 'Hoodies'
  },
  {
    name: 'Hoodie "Class Inverso" Green',
    price: 449,
    imageURL: hoodieClassInversoGreen,
    productType: 'Hoodies'
  },
  {
    name: 'Hoodie "Class Inverso" Black',
    price: 449,
    imageURL: hoodieClassInversoBlack,
    productType: 'Hoodies'
  },
  {
    name: 'Hoodie "CLS" Black',
    price: 449,
    imageURL: hoodieClsBlack,
    productType: 'Hoodies'
  },
  {
    name: 'Crewneck "CLS" Brown',
    price: 399,
    imageURL: crewneckClsBrown,
    productType: 'Crewnecks'
  },
  {
    name: 'Crewneck "CLS" Gray',
    price: 399,
    imageURL: crewneckClsGray,
    productType: 'Crewnecks'
  },
  {
    name: 'T-Shirt "Class Inverso" Black',
    price: 199,
    imageURL: tshirtClassInverso,
    productType: 'T-Shirts'
  },
  {
    name: 'T-Shirt "CLS" Green',
    price: 199,
    imageURL: tshirtClsGreen,
    productType: 'T-Shirts'
  },
  {
    name: 'T-Shirt "Pipa" Red',
    price: 199,
    imageURL: tshirtPipaRed,
    productType: 'T-Shirts'
  },
  {
    name: '"Paladio" Pants Off-White',
    price: 439,
    imageURL: pantsPaladioOffwhite,
    productType: 'Pants'
  },
  {
    name: '"Paladio" Pants Green',
    price: 439,
    imageURL: pantsPaladioGreen,
    productType: 'Pants'
  },
  {
    name: '"Filetagem" Jeans Pants Black',
    price: 419,
    imageURL: pantsFiletagemBlackJeans,
    productType: 'Pants'
  },
  {
    name: '3 Panel Hat "C" Beige',
    price: 219,
    imageURL: cap3PanelBeige,
    productType: 'Caps'
  },
  {
    name: 'Classic Sport Hat "Pipa" Royal Blue',
    price: 219,
    imageURL: capClassicPipaRoyalBlue,
    productType: 'Caps'
  },
  {
    name: '3 Panel Hat "C" Black',
    price: 219,
    imageURL: cap3PanelBlack,
    productType: 'Caps'
  },
  {
    name: '3 Panel Hat "C" Black',
    price: 219,
    imageURL: cap3PanelBlack,
    productType: 'Caps'
  },
  {
    name: 'Class Sport Hat "CLS" Gray',
    price: 219,
    imageURL: capClsGray,
    productType: 'Caps'
  },
  {
    name: 'Classic Sport Hat "Pipa" Black',
    price: 219,
    imageURL: capClassicPipaBlack,
    productType: 'Caps'
  },
  {
    name: '3 Panel Hat "Class Inverso" Black',
    price: 249,
    imageURL: cap3PanelInversoBlack,
    productType: 'Caps'
  },
]