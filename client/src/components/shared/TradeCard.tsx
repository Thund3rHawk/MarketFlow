import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface props {
  stockIcon: React.ReactElement;
  name: string;
  price: string;
  volume: string;
  timestamp: string;
}

const TradeCard: React.FC<props> = ({ stockIcon, name, price, volume, timestamp }) => {
  return (
    <Card className="col-span-1 h-28 bg-slate-800">
      <CardContent className="p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center">            
            <div className="text-white me-3">
                {stockIcon}
            </div>
            <span className="text-white">{name}</span>
          </div>
          <div className="text-lg text-green-500 font-bold">{price}</div>
        </div>
        <div className="flex justify-between items-center text-sm text-white">
          <span><b>Vol:</b> {volume}</span>
          <span>{timestamp}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradeCard;
