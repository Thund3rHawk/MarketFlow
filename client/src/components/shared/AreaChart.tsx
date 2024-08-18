import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

export function AreachartChart(props: any)  {
    return (
      <div {...props}>
        <ChartContainer
          config={{
            desktop: {
              label: "Desktop",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="max-h-[300px]"
        >
          <AreaChart
            accessibilityLayer
            data={[
              { month: "January", value: 90 },
              { month: "February", value: 305 },
              { month: "March", value: 237 },
              { month: "April", value: 73 },
              { month: "May", value: 209 },
              { month: "June", value: 214 },
              { month: "July", value: 289 },
              { month: "August", value: 149 },
              { month: "September", value: 209 },
              { month: "October", value: 248 },
              { month: "November", value: 145 },
              { month: "December", value: 214 },
            ]}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} syncWithTicks = {true} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Area
              dataKey="value"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    )
  }
  