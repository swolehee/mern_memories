import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 150,
  },
});

export default function SportsFeed({ feedItem }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={feedItem.enclosure.url}
          title={feedItem.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {feedItem.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href={feedItem.link}>Link to Article</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
