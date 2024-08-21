import React from "react";
import { Card, CardContent } from "../ui/card";


interface props {
  stockIcon: string,
  name: string;
  price: string;
  volume: string;
  timestamp: string;
}

const TradeCard: React.FC<props> = ({ stockIcon, name, price, volume, timestamp }) => {
  return (
    <Card className="col-span-1 h-28 bg-slate-800">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center">            
            <div className="bg-white me-3 p-2 rounded-full">
                <img src= {stockIcon} alt = {name} width={30}/>
            </div>
            <span className="text-white font-bold">{name}</span>
          </div>
          <div className="text-lg text-white font-bold">{price}</div>
        </div>
        <div className="flex justify-between items-center text-sm text-white">
          <span><b>Volume:</b> {volume}</span>
          <span>{timestamp}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradeCard;
