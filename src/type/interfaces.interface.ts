export interface IdataProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: string;
  id: string;
  images: string[];
  price: string;
  rating: string;
  stock: string;
  thumbnail: string;
  title: string;
}

export interface IdataCardProduct {
  title: string;
  image: string;
}
export interface IdataCardOneProduct {
  Brand: string;
  Category: string;
  Rating: string;
  Price: string;
  Stock: string;
  DiscountPercentage: string;
  Description: string;
}
export interface IProductImages {
  [key: string]: string;
}
export interface IStateMain {
  arrProducts: IdataProduct[];
  dataSearch: string;
  grogySpinner: boolean;
}
export interface IStateSearch {
  search: string;
}
export interface IStateError {
  hasError: boolean;
}
