export interface Mydata {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
  rating: {
    rate: number;
    count: number;
  };
}
