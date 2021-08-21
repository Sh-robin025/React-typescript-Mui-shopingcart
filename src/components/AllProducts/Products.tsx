import { Grid, Container } from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../services/App";
import { productContainer } from "../../styles/products.container";
import { Product } from "../../types/Types";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data } = useQuery<Product[]>("products", getProducts);
  const classes = productContainer();

  const handleAddToCart = (clickedItem: Product) => console.log(clickedItem);

  return (
    <Container>
      <Grid container spacing={2} className={classes.container} justifyContent="center">
        {data?.map((product) => (
          <ProductCard item={product} handleAddToCart={handleAddToCart} key={product.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
