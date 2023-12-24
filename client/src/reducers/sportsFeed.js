import { GET_SPORTS_FEED } from "../constants/actionTypes";

const sportsFeed = (sportsFeed = [], action) => {
  switch (action.type) {
    case GET_SPORTS_FEED:
      return action.payload;
    default:
      return sportsFeed;
  }
};

export default sportsFeed;
