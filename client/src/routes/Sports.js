import { Container, Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useStyles from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllSportsFeeds, getSportsFeed } from "../actions/sportsFeed";
import SportsFeed from "../components/SportsFeed/SportsFeed";
import SportsCarousel from "../components/SportsFeed/SportsCarousel";

const Sports = () => {
  const classes = useStyles();
  const sportsFeeds = useSelector((state) => state.sportsFeeds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSportsFeeds());
  }, [dispatch]);

  return (
    <Container className={classes.carouselContainer} maxWidth={false}>
      <div>
        {sportsFeeds &&
          sportsFeeds.map((sport) => (
            <>
              <SportsCarousel sportsFeed={sport} />
              <Divider />
            </>
          ))}
      </div>
    </Container>
  );
};

export default Sports;
