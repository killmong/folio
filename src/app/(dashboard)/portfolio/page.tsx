"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BarList, CategoryBar } from "@tremor/react";
import { topPerformingAssets } from "@/data/data";
import { motion } from "motion/react";
import { AssetAllocation } from "@/components/dashboard/AssetAllocation";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const dataFormatter = (number: number) =>
  `₹${Intl.NumberFormat("en-IN").format(number).toString()}`;

export default function PortfolioPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          My Portfolio
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Deep dive into your asset performance and allocation.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Portfolio Health Metric using CategoryBar */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Health Score</CardTitle>
              <CardDescription>
                Based on diversification and risk-adjusted returns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-500">
                  Moderate Risk
                </span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  72 / 100 (Good)
                </span>
              </div>
              <CategoryBar
                values={[40, 30, 20, 10]}
                colors={["rose", "orange", "emerald", "blue"]}
                markerValue={72}
                showAnimation={true}
                className="mt-2"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Top Performing Assets using BarList */}
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Top Performing Assets</CardTitle>
              <CardDescription>Highest returns this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <BarList
                data={topPerformingAssets}
                className="mt-2"
                valueFormatter={dataFormatter}
                showAnimation={true}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Reusing the Donut Chart from the Dashboard */}
        <motion.div variants={itemVariants}>
          <AssetAllocation />
        </motion.div>
      </div>
    </motion.div>
  );
}
