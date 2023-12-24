import { combineReducers } from "redux";

import posts from "./posts";
import sportsFeed from "./sportsFeed";

export default combineReducers({
  posts,
  sportsFeed,
});
