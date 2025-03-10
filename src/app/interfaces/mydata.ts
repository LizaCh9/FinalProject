import {Rating} from './rating';

export interface Mydata {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  image: string;
  rating: Rating
}
