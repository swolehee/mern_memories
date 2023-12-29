import * as api from "../api";
import { GET_ALL_SPORTS_FEEDS, GET_SPORTS_FEED } from "../constants/actionTypes";

export const getSportsFeed = () => async (dispatch) => {
  try {
    const { data } = await api.getSportsFeed();

    console.log(data.dir);

    dispatch({ type: GET_SPORTS_FEED, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllSportsFeeds = () => async (dispatch) => {
  try {
    const data = await api.getAllSportsFeeds();

    dispatch({ type: GET_ALL_SPORTS_FEEDS, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
