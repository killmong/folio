import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DonutChart, Legend } from "@tremor/react";
import { assetAllocation } from "@/data/data";

const dataFormatter = (number: number) => {
  return "₹" + Intl.NumberFormat("en-IN").format(number).toString();
};

export function AssetAllocation() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center justify-center pb-6">
        <DonutChart
          className="h-48 w-48"
          data={assetAllocation}
          category="value"
          index="name"
          colors={["emerald", "blue", "amber", "slate"]}
          valueFormatter={dataFormatter}
          showAnimation={true}
        />
        <div className="mt-8">
          <Legend
            categories={assetAllocation.map((asset) => asset.name)}
            colors={["emerald", "blue", "amber", "slate"]}
            className="justify-center"
          />
        </div>
      </CardContent>
    </Card>
  );
}
