import { restClient } from "@polygon.io/client-js";
import dotenv from "dotenv";

dotenv.config();

const rest = restClient(process.env.POLY_API_KEY);
// const rest = restClient("LrcuGF11vRImdzTvDj9KaRNtuX5dX0Rd");

export const getStocks = async (req, res) => {
  try {
    const stock = await rest.stocks.aggregates(
      "AAPL",
      1,
      "hour",
      "2023-12-28",
      "2023-12-28"
    );

    res.status(200).json(stock);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
