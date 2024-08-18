import GraphCard from "./shared/GraphCard";
import StatsCard from "./shared/StatsCard";
import { AreachartChart } from "./shared/AreaChart";
import { LinechartChart } from "./shared/LineChart";
import StockCard from "./shared/StockCard";
import StockDetailsCard from "./shared/StockDetailsCard";
import Navbar from "./shared/Navbar";

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <main className="flex max-h-[calc(100vh_-_theme(spacing.10))] flex-1 flex-col gap-8 p-4 md:gap-10 md:p-10">
        <Navbar />
        <LinechartChart className="aspect-[4/3]" />
        {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <GraphCard
            cardHeading="Issues"
            cardDescription="Tracking open and closed issues"
            cardContent={<LinechartChart className="aspect-[4/3]" />}
          />
          <GraphCard
            cardHeading="Pull Requests"
            cardDescription="Tracking open and merged pull requests"
            cardContent={<LinechartChart className="aspect-[4/3]" />}
          />
          <GraphCard
            cardHeading="Commits"
            cardDescription="Tracking total commits over time"
            cardContent={<LinechartChart className="aspect-[4/3]" />}
          />
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <StockCard />
        </div>
        {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <StatsCard />
          <GraphCard
            cardHeading="Commit Activity"
            cardDescription="Visualize your commit patterns"
            cardContent={<AreachartChart className="aspect-[9/4]" />}
          />
        </div> */}
        <section className="mt-12 px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Stock Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
            <StockDetailsCard />
          </div>
        </section>
      </main>
    </div>
  );
}
