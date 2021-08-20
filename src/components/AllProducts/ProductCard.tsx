import React, { FC } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Product } from "../../types/Types";

const useStyles = makeStyles({
  media: {
    height: 240,
  },
});

type Props = {
  item: Product;
};

const ProductCard: FC<Props> = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid item md={2}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.media} image={item.image} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {/* {item.title} */} Product Name
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
