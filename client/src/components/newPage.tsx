/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rUmJpdVM5tw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { CartesianGrid, XAxis, Line, LineChart, Bar, BarChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import StockDetailsCard from "./shared/StockDetailsCard"

export default function Component() {
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
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Stock Market Dashboard</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="shrink-0">
              <ArrowUpDownIcon className="w-4 h-4 mr-2" />
              Sort by
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]" align="end">
            <DropdownMenuRadioGroup value={sortBy} onValueChange={(value) => setSortBy(value)}>
              <DropdownMenuRadioItem value="price">Price</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="change">Price Change</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={sortDirection} onValueChange={(value) => setSortDirection(value)}>
              <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      </div>
      <section className="mt-12 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Stock Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <LinechartChart className="aspect-[16/9]" />
          </div>
          <div>
            <BarchartChart className="aspect-[16/9]" />
          </div>
        </div>
      </section>
      <section className="mt-12 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Stock Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Apple Inc. (AAPL)</CardTitle>
              <CardDescription>Technology</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">$145.32</div>
                  <div className="text-sm text-muted-foreground">+2.1%</div>
                </div>
                <div>
                  <TrendingUpIcon className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Apple Inc. is an American multinational technology company that specializes in consumer electronics,
                software, and online services.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-sm text-primary hover:underline" prefetch={false}>
                View more
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Microsoft Corporation (MSFT)</CardTitle>
              <CardDescription>Technology</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">$280.15</div>
                  <div className="text-sm text-muted-foreground">-1.5%</div>
                </div>
                <div>
                  <TrendingDownIcon className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Microsoft Corporation is an American multinational technology company that produces software, consumer
                electronics, personal computers, and related services.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-sm text-primary hover:underline" prefetch={false}>
                View more
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Amazon.com, Inc. (AMZN)</CardTitle>
              <CardDescription>Consumer Discretionary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold">$3,210.45</div>
                  <div className="text-sm text-muted-foreground">+0.8%</div>
                </div>
                <div>
                  <TrendingUpIcon className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Amazon.com, Inc. is an American multinational technology company that focuses on e-commerce, cloud
                computing, digital streaming, and artificial intelligence.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-sm text-primary hover:underline" prefetch={false}>
                View more
              </Link>
            </CardFooter>
          </Card>
          <StockDetailsCard/>
        </div>
      </section>
    </div>
  )
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}


function BarchartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}


function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function TrendingDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  )
}


function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}