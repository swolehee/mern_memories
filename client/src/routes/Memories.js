import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../actions/posts";
import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";
import useStyles from "../styles";

const Memories = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <main>
        <Container maxWidth="lg">
          <Grow in>
            <Container>
              <Grid
                className={classes.mainContainer}
                container
                justify="space-between"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={12} lg={7}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </main>
    </>
  );
};

export default Memories;
