import React, { FC } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
// eslint-disable-next-line import/no-unresolved
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Props } from "../../types/Types";
import { cardStyles } from "../../styles/product.card";

const ProductCard: FC<Props> = ({ item, handleAddToCart }) => {
  const classes = cardStyles();

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.media} image={item.image} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {item.title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            onClick={() => handleAddToCart(item)}
          >
            <AddShoppingCartIcon /> Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
