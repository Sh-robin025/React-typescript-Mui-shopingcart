import React from "react";
import { useQuery } from "react-query";
import { LinearProgress } from "@material-ui/core";
import AppRouter from "./AppRouter";
import { getProducts, Product } from "./services/App";

const App = () => {
  const { data, isLoading, error } = useQuery<Product[]>("products", getProducts);
  console.log(data);
  if (isLoading) return <LinearProgress color="secondary" />;

  if (error)
    return (
      <div>
        <h4>Something went wrong</h4>
      </div>
    );

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
