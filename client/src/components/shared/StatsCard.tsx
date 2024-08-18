import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const StatsCard = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Repository Statistics</CardTitle>
          <CardDescription>Key metrics for your repositories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-start gap-2">
              <div className="text-sm font-medium">Total Contributions</div>
              <div className="text-4xl font-bold">1,234</div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="text-sm font-medium">Open Issues</div>
              <div className="text-4xl font-bold">42</div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="text-sm font-medium">Closed Issues</div>
              <div className="text-4xl font-bold">158</div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="text-sm font-medium">Open Pull Requests</div>
              <div className="text-4xl font-bold">12</div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="text-sm font-medium">Merged Pull Requests</div>
              <div className="text-4xl font-bold">89</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default StatsCard;
