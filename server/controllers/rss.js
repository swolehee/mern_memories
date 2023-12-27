import Parser from "rss-parser";
import async from "async";

const nbaFeedUrl = "https://www.espn.com/espn/rss/nba/news";
const nflFeedUrl = "https://www.espn.com/espn/rss/nfl/news";
const golfFeedUrl = "https://www.espn.com/espn/rss/golf/news";

// TODO: In the future, make this dynamic, so I can add new sports feed on the client.
const sportToUrls = [
  {
    sport: "nba",
    url: "https://www.espn.com/espn/rss/nba/news",
  },
  {
    sport: "nfl",
    url: "https://www.espn.com/espn/rss/nfl/news",
  },
  {
    sport: "golf",
    url: "https://www.espn.com/espn/rss/golf/news",
  },
];

const parser = new Parser();

export const parse = async (req, res) => {
  try {
    const feed = await parser.parseURL(nbaFeedUrl);
    res.status(200).json(feed.items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const parseAllSportsFeeds = async (req, res) => {
  try {
    const result = await Promise.all(
      sportToUrls.map((item) => parser.parseURL(item.url))
    );

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
