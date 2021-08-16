import axios from "axios";

export type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
};

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};
