export interface IdataPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
  created: string;
  edited: string;
  url: string;
}
export interface IpeopleImages {
  [key: string]: string;
}
export interface IStateMain {
  arrPeoples: IdataPeople[];
  dataSearch: string;
}
export interface IStateSearch {
  search: string;
}
