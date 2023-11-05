export interface IdataPeople {
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

export interface IdataCardPeople {
  title: string;
  image: string;
}
export interface IdataCardOnePeople {
  Brand: string;
  Category: string;
  Rating: string;
  Price: string;
  Stock: string;
  DiscountPercentage: string;
  Description: string;
}
export interface IpeopleImages {
  [key: string]: string;
}
export interface IStateMain {
  arrPeoples: IdataPeople[];
  dataSearch: string;
  grogySpinner: boolean;
}
export interface IStateSearch {
  search: string;
}
export interface IStateError {
  hasError: boolean;
}
