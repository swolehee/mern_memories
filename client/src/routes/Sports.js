import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import useStyles from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { getSportsFeed } from "../actions/sportsFeed";
import SportsFeed from "../components/SportsFeed/SportsFeed";

const Sports = () => {
  const classes = useStyles();
  const sportsFeed = useSelector((state) => state.sportsFeed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSportsFeed());
  }, [dispatch]);

  return (
    <Container className={classes.carouselContainer} maxWidth={false}>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {sportsFeed ? (
            sportsFeed.map((item) => <SportsFeed feedItem={item} />)
          ) : (
            <div>nothing</div>
          )}
          {/* <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div> */}
        </Carousel>
      </div>
    </Container>
  );
};

export default Sports;
