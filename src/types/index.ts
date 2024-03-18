export type Product = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  count: number;
  price: number;
}

export type Order = {
  id: string;
  date: string;
  items: Product[];
}