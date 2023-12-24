import * as api from "../api";
import { GET_SPORTS_FEED } from "../constants/actionTypes";

export const getSportsFeed = () => async (dispatch) => {
  try {
    console.log("I GOT CALLED");
    const { data } = await api.getSportsFeed();

    console.log(data.dir);

    dispatch({ type: GET_SPORTS_FEED, payload: data });
  } catch (error) {
    console.log(error);
  }
};
