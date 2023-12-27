import { combineReducers } from "redux";

import posts from "./posts";
import sportsFeeds from "./sportsFeed";

export default combineReducers({
  posts,
  sportsFeeds,
});
