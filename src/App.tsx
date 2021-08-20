import React from "react";
import { useQuery } from "react-query";
import { LinearProgress } from "@material-ui/core";
import AppRouter from "./AppRouter";
import { getProducts } from "./services/App";
import { Product } from "./types/Types";

const App = () => {
  const { isLoading, error } = useQuery<Product[]>("products", getProducts);

  if (isLoading)
    return (
      <div>
        <LinearProgress color="secondary" />
      </div>
    );

  if (error)
    return (
      <div>
        <h4>Something went wrong</h4>
      </div>
    );

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
