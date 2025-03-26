import {Rating} from './rating';

export interface Mydata {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string; // ✅ correct image field
  images: string[];  // ✅ optional, can keep
  rating: {
    rate: number;
    count: number;
  };
}
