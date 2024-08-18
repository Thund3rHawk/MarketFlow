import { useMemo, useState } from "react";
import { Card } from "../ui/card";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

const stocks = [
    {
      ticker: "AAPL",
      price: 145.32,
      change: 2.1,
    },
    {
      ticker: "MSFT",
      price: 280.15,
      change: -1.5,
    },
    {
      ticker: "AMZN",
      price: 3210.45,
      change: 0.8,
    },
    {
      ticker: "GOOG",
      price: 2800.12,
      change: -0.3,
    },
    {
      ticker: "TSLA",
      price: 700.25,
      change: 3.2,
    },
    {
      ticker: "NVDA",
      price: 650.78,
      change: 1.9,
    },
    {
      ticker: "PYPL",
      price: 275.9,
      change: -0.7,
    },
    {
      ticker: "ADBE",
      price: 550.12,
      change: 0.5,
    },
  ]

const StockCard = () => {
    const [sortBy, setSortBy] = useState("change")
    const [sortDirection, setSortDirection] = useState("desc")
    const sortedStocks = useMemo(() => {
        return stocks.sort((a, b) => {
          if (sortBy === "price") {
            return sortDirection === "asc" ? a.price - b.price : b.price - a.price
          } else {
            return sortDirection === "asc" ? a.change - b.change : b.change - a.change
          }
        })
      }, [stocks, sortBy, sortDirection])

  return (
    <>
      {sortedStocks.map((stock) => (
          <Card key={stock.ticker} className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold">{stock.ticker}</div>
              <div className={`text-lg font-bold ${stock.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                {stock.price.toFixed(2)}
                <span className="ml-2">
                  {stock.change >= 0 ? (
                    <TrendingUpIcon className="w-4 h-4" />
                  ) : (
                    <TrendingDownIcon className="w-4 h-4" />
                  )}
                </span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">{stock.change.toFixed(2)}%</div>
          </Card>
        ))}
    </>
  );
};

export default StockCard;
