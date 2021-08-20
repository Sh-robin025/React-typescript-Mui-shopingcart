import { Grid, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../services/App";
import { Product } from "../../types/Types";
import ProductCard from "./ProductCard";

const useStyles = makeStyles({
  container: {
    paddingTop: 10,
  },
});

const Products = () => {
  const { data } = useQuery<Product[]>("products", getProducts);
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2} className={classes.container} justifyContent="center">
        {data?.map((product: Product) => (
          <ProductCard item={product} key={product.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
