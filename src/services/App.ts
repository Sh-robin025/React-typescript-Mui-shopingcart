import axios from "axios";
import { Product } from "../types/Types";

export const getProducts = async (): Promise<Product[]> => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};
