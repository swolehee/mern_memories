import Parser from "rss-parser";

const feedUrl = "https://www.espn.com/espn/rss/nba/news";
const parser = new Parser();

export const parse = async (req, res) => {
  try {
    const feed = await parser.parseURL(feedUrl);
    console.log(feed.items);

    res.status(200).json(feed.items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
