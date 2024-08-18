import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

const StockDetailsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alphabet Inc. (GOOG)</CardTitle>
        <CardDescription>Communication Services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">$2,800.12</div>
            <div className="text-sm text-muted-foreground">-0.3%</div>
          </div>
          <div>
            <TrendingUpIcon className="w-6 h-6 text-green-500" />
            {/* <TrendingDownIcon className="w-6 h-6 text-red-500" /> */}
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Alphabet Inc. is an American multinational technology conglomerate that was created as a restructuring of
          Google.
        </p>
      </CardContent>
      <CardFooter>
        <a href="#" className="text-sm text-primary hover:underline">
          View more
        </a>
      </CardFooter>
    </Card>
  );
};

export default StockDetailsCard;
