import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {"date": "01", "AAPL": 150.00, "GOOGL": 2700.00, "AMZN": 3400.00, "MSFT": 290.00, "TSLA": 680.00, "NFLX": 520.00},
  {"date": "02", "AAPL": 152.00, "GOOGL": 2720.00, "AMZN": 3450.00, "MSFT": 295.00, "TSLA": 690.00, "NFLX": 525.00},
  {"date": "03", "AAPL": 149.00, "GOOGL": 2710.00, "AMZN": 3420.00, "MSFT": 293.00, "TSLA": 675.00, "NFLX": 530.00},
  {"date": "04", "AAPL": 151.00, "GOOGL": 2730.00, "AMZN": 3470.00, "MSFT": 298.00, "TSLA": 695.00, "NFLX": 535.00},
  {"date": "05", "AAPL": 153.00, "GOOGL": 2740.00, "AMZN": 3490.00, "MSFT": 299.00, "TSLA": 700.00, "NFLX": 540.00},
  {"date": "06", "AAPL": 150.50, "GOOGL": 2750.00, "AMZN": 3440.00, "MSFT": 296.00, "TSLA": 685.00, "NFLX": 530.00},
  {"date": "07", "AAPL": 152.50, "GOOGL": 2760.00, "AMZN": 3460.00, "MSFT": 300.00, "TSLA": 690.00, "NFLX": 535.00},
  {"date": "08", "AAPL": 154.00, "GOOGL": 2780.00, "AMZN": 3500.00, "MSFT": 305.00, "TSLA": 710.00, "NFLX": 545.00},
  {"date": "09", "AAPL": 155.00, "GOOGL": 2800.00, "AMZN": 3520.00, "MSFT": 310.00, "TSLA": 715.00, "NFLX": 550.00},
  {"date": "10", "AAPL": 153.50, "GOOGL": 2790.00, "AMZN": 3510.00, "MSFT": 308.00, "TSLA": 705.00, "NFLX": 540.00},
  {"date": "11", "AAPL": 156.00, "GOOGL": 2820.00, "AMZN": 3550.00, "MSFT": 312.00, "TSLA": 720.00, "NFLX": 555.00},
  {"date": "12", "AAPL": 157.50, "GOOGL": 2840.00, "AMZN": 3580.00, "MSFT": 315.00, "TSLA": 730.00, "NFLX": 560.00},
  {"date": "13", "AAPL": 158.00, "GOOGL": 2850.00, "AMZN": 3600.00, "MSFT": 318.00, "TSLA": 735.00, "NFLX": 565.00},
  {"date": "14", "AAPL": 157.00, "GOOGL": 2830.00, "AMZN": 3570.00, "MSFT": 316.00, "TSLA": 725.00, "NFLX": 558.00},
  {"date": "15", "AAPL": 156.50, "GOOGL": 2825.00, "AMZN": 3560.00, "MSFT": 314.00, "TSLA": 722.00, "NFLX": 555.00},
  {"date": "16", "AAPL": 158.50, "GOOGL": 2855.00, "AMZN": 3590.00, "MSFT": 320.00, "TSLA": 730.00, "NFLX": 565.00},
  {"date": "17", "AAPL": 160.00, "GOOGL": 2870.00, "AMZN": 3620.00, "MSFT": 322.00, "TSLA": 735.00, "NFLX": 570.00},
  {"date": "18", "AAPL": 161.50, "GOOGL": 2890.00, "AMZN": 3650.00, "MSFT": 325.00, "TSLA": 740.00, "NFLX": 575.00},
  {"date": "19", "AAPL": 160.00, "GOOGL": 2880.00, "AMZN": 3640.00, "MSFT": 324.00, "TSLA": 738.00, "NFLX": 570.00},
  {"date": "20", "AAPL": 159.00, "GOOGL": 2870.00, "AMZN": 3630.00, "MSFT": 323.00, "TSLA": 735.00, "NFLX": 565.00},
  {"date": "21", "AAPL": 158.00, "GOOGL": 2860.00, "AMZN": 3620.00, "MSFT": 322.00, "TSLA": 732.00, "NFLX": 560.00},
  {"date": "22", "AAPL": 157.50, "GOOGL": 2855.00, "AMZN": 3610.00, "MSFT": 321.00, "TSLA": 730.00, "NFLX": 555.00},
  {"date": "23", "AAPL": 156.00, "GOOGL": 2840.00, "AMZN": 3600.00, "MSFT": 320.00, "TSLA": 728.00, "NFLX": 552.00},
  {"date": "24", "AAPL": 155.00, "GOOGL": 2830.00, "AMZN": 3590.00, "MSFT": 318.00, "TSLA": 725.00, "NFLX": 550.00},
  {"date": "25", "AAPL": 154.50, "GOOGL": 2825.00, "AMZN": 3580.00, "MSFT": 316.00, "TSLA": 720.00, "NFLX": 548.00},
  {"date": "26", "AAPL": 153.00, "GOOGL": 2810.00, "AMZN": 3560.00, "MSFT": 314.00, "TSLA": 718.00, "NFLX": 546.00},
  {"date": "27", "AAPL": 152.00, "GOOGL": 2800.00, "AMZN": 3550.00, "MSFT": 312.00, "TSLA": 715.00, "NFLX": 543.00},
  {"date": "28", "AAPL": 151.50, "GOOGL": 2795.00, "AMZN": 3540.00, "MSFT": 311.00, "TSLA": 713.00, "NFLX": 540.00},
  {"date": "29", "AAPL": 150.50, "GOOGL": 2785.00, "AMZN": 3530.00, "MSFT": 309.00, "TSLA": 710.00, "NFLX": 538.00},
]



export function LinechartChart(props: any) {
    return (
      <div {...props}>
        <ChartContainer
          config={{
            desktop: {
              label: "Desktop",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="max-h-[500px]"
        >
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true}/>
            <XAxis
              dataKey="date"
              tickLine={true}
              axisLine={true}
              tickMargin={4}
              tickFormatter={(value) => value.slice(0, 3)}              
            />
            <YAxis 
              height={20}
              minTickGap={1}
              tickLine = {true}
              type= 'number'
              interval={2}
            />
            <ChartTooltip cursor={true} content={<ChartTooltipContent hideLabel />} />
            <Line dataKey="AAPL" type= 'linear' stroke="var(--color-desktop)" strokeWidth={1} dot={false} stroke = "#8884d8"/>
            {/* <Line dataKey="GOOGL" type= 'linear' stroke="var(--color-desktop)" strokeWidth={1} dot={false} stroke = "#82ca9d"/>
            <Line dataKey="AMZN" type= 'linear' stroke="var(--color-desktop)" strokeWidth={1} dot={false} stroke = "#6754d8"/>
            <Line dataKey="MSFT" type= 'linear' stroke="var(--color-desktop)" strokeWidth={1} dot={false} stroke = "#8884a4"/>
            <Line dataKey="TSLA" type= 'linear' stroke="var(--color-desktop)" strokeWidth={1} dot={false} stroke = "#0884d8"/>
            <Line dataKey="NFLX" type= 'linear' stroke="var(--color-desktop)" strokeWidth={1} dot={false} stroke = "#8084d8"/> */}
          </LineChart>
        </ChartContainer>
      </div>
    )
  }