import TradeCard from "./shared/TradeCard";
import { useEffect, useState } from "react";
import appleLogo from '../assets/apple.png'
import microsoftLogo from '../assets/microsoft.png'
import amazonLogo from '../assets/amazon.png'
import googleLogo from '../assets/google.png'
import binanceLogo from '../assets/binance.png'
import metaLogo from '../assets/meta.png'

interface data {
    price: string,
    vol: string,
    timestamp: string,    
}

const Dashboard = () => {

    const [aapl, setAppl] = useState <data> ({price: '0', vol: '0', timestamp: '0'})
    const [mfst, setMfst] = useState <data> ({price: '0', vol: '0', timestamp: '0'})
    const [amzn, setAmzn] = useState <data> ({price: '0', vol: '0', timestamp: '0'})
    const [fb, setFb] = useState <data> ({price: '0', vol: '0', timestamp: '0'})
    const [googl, setGoogl] = useState <data> ({price: '0', vol: '0', timestamp: '0'})
    const [binance, setBinance] = useState <data> ({price: '0', vol: '0', timestamp: '0'})


    useEffect (()=>{
        const sse = new EventSource('http://localhost:8080/stream');
        console.log(sse);
        
        function formatTime (timestamp: string){
            const date = new Date(timestamp);
            const formattedDate = date.toLocaleString();
            return formattedDate;
        }

        sse.onmessage = (event) => {
            try {
                const preParsedData = JSON.parse(event.data);
                const parsedData = JSON.parse(preParsedData);
    
                if (parsedData.data[0].s === 'AAPL'){
                    
                    setAppl ({price: parsedData.data[0].p, vol: parsedData.data[0].v, timestamp: formatTime(parsedData.data[0].t)})
                }
                if (parsedData.data[0].s === 'MSFT'){
                    setMfst ({price: parsedData.data[0].p, vol: parsedData.data[0].v, timestamp: formatTime(parsedData.data[0].t)})
                }
                if (parsedData.data[0].s === 'AMZN'){
                    setAmzn ({price: parsedData.data[0].p, vol: parsedData.data[0].v, timestamp: formatTime(parsedData.data[0].t)})
                }
                if (parsedData.data[0].s === 'BINANCE:BTCUSDT'){
                    setBinance ({price: parsedData.data[0].p, vol: parsedData.data[0].v, timestamp: formatTime(parsedData.data[0].t)})
                }
                if (parsedData.data[0].s === 'GOOG'){
                    setGoogl ({price: parsedData.data[0].p, vol: parsedData.data[0].v, timestamp: formatTime(parsedData.data[0].t)})
                }
                if (parsedData.data[0].s === 'META'){
                    setFb ({price: parsedData.data[0].p, vol: parsedData.data[0].v, timestamp: formatTime(parsedData.data[0].t)})
                }
             
            
            } catch (error) {
              console.error('Error parsing SSE data:', error);
            }
          };
    
        // Clean up the SSE connection when the component unmounts
        return () => {
          sse.close();
        };
    },[]);


  const stocks = [
    {
      name: "Apple (AAPL)",
      price: `${aapl.price}`,
      change: 2.5,
      volume: `${aapl.vol}`,
      timestamp: `${aapl.timestamp}`,
      icon: appleLogo
    },
    {
      name: "Google (GOOG)",
      price: `${googl.price}`,
      change: 2.5,
      volume: `${googl.vol}`,
      timestamp: `${googl.timestamp}`,
      icon: googleLogo,
    },
    {
      name: "Microsoft (MSFT)",
      price: `${mfst.price}`,
      change: 2.5,
      volume: `${mfst.vol}`,
      timestamp: `${mfst.timestamp}`,
      icon: microsoftLogo,
    },
    {
      name: "Amazon (AMZN)",
      price: `${amzn.price}`,
      change: 2.5,
      volume: `${amzn.vol}`,
      timestamp: `${amzn.timestamp}`,
      icon: amazonLogo,
    },
    {
      name: "Binance (BINANCE:BTCUSDT)",
      price: `${binance.price}`,
      change: 2.5,
      volume: `${binance.vol}`,
      timestamp: `${binance.timestamp}`,
      icon: binanceLogo,
    },
    {
      name: "Meta (META)",
      price: `${fb.price}`,
      change: 2.5,
      volume: `${fb.vol}`,
      timestamp: `${fb.timestamp}`,
      icon: metaLogo,
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Trade Cards Dashboard</h1>
        <div className="h-96">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-rows-2 ">
            {stocks.map((stock, index) => (
                <TradeCard
                key={index}
                stockIcon={stock.icon}
                name={stock.name}
                price={stock.price}
                volume={stock.volume}
                timestamp={stock.timestamp}
                />
            ))}
            </div>
        </div>
       
      </main>
    </div>
  );
};

export default Dashboard;
