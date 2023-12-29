import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CircularProgress, Dialog } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import * as api from "../../api";

import parse from "html-react-parser";
import moment from "moment";

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
  const [isArticleIsOpen, setIsArticleIsOpen] = useState(false);
  const [articleContent, setArticleContent] = useState(null);

  const handleClickOpen = async () => {
    console.log(`clicked opening + ${feedItem.link}`);
    setIsArticleIsOpen(true);
    const content = await api.getSportsArticle(feedItem.link);
    setArticleContent(content.data.content);
  };

  const handleClose = () => {
    setIsArticleIsOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {feedItem.enclosure ? (
          <CardMedia
            className={classes.media}
            image={feedItem.enclosure.url}
            title={feedItem.title}
            onClick={handleClickOpen}
          />
        ) : (
          <CardMedia
            className={classes.media}
            image={
              "https://a.espncdn.com/i/espn/teamlogos/lrg/trans/espn_dotcom_black.gif"
            }
            title={feedItem.title}
            onClick={handleClickOpen}
          />
        )}
        <Dialog fullScreen open={isArticleIsOpen} onClose={handleClose}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {feedItem.title}
          </Typography>
          {articleContent ? parse(`${articleContent}`) : <CircularProgress />}
        </Dialog>

        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {feedItem.title}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Typography variant="caption" color="textSecondary">
          {moment(feedItem.isoDate).fromNow()}
        </Typography>
        {/* <Button size="small" color="primary">
          <Link href={feedItem.link}>Link</Link>
        </Button> */}
      </CardActions>
    </Card>
  );
}

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%dm",
    h: "an hour",
    hh: "%dh",
    d: "a day",
    dd: "%dd",
    w: "a week",
    ww: "%dwk",
    M: "a month",
    MM: "%d mo",
    y: "a year",
    yy: "%dyr",
  },
});
