import { Observable } from "rxjs";

export type Reponse = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
  name: string;
}[];

export interface ProductDataSource {
  getProducts: () => Observable<Reponse>;
}
