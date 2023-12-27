import { GET_ALL_SPORTS_FEEDS, GET_SPORTS_FEED } from "../constants/actionTypes";

const sportsFeeds = (sportsFeeds = [], action) => {
  switch (action.type) {
    case GET_SPORTS_FEED:
      return [action.payload];
    case GET_ALL_SPORTS_FEEDS:
      return action.payload;
    default:
      return sportsFeeds;
  }
};

export default sportsFeeds;
