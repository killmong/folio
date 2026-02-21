"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart } from "@tremor/react";
import { portfolioGrowth } from "@/data/data";
import { Wallet, TrendingUp, PiggyBank, Briefcase } from "lucide-react";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { motion, Variants } from "motion/react";
import { AssetAllocation } from "@/components/dashboard/AssetAllocation";
const dataFormatter = (number: number) => {
  return "₹" + Intl.NumberFormat("en-IN").format(number).toString();
};

// The parent container that controls the cascading delay
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
// The individual animation for every card and section
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};
export default function Dashboard() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* Page Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Dashboard overview
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Track your investments, SIPs, and overall wealth growth.
        </p>
      </motion.div>

      {/* Quick Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Balance
              </CardTitle>
              <Wallet className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1,85,000</div>
              <p className="text-xs text-primary flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +10.1% from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly SIP</CardTitle>
              <PiggyBank className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹25,000</div>
              <p className="text-xs text-slate-500 mt-1">
                Next auto-pay on 5th Mar
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Digital Gold
              </CardTitle>
              <Briefcase className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5g</div>
              <p className="text-xs text-primary flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +2.4% today
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Assets
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-slate-500 mt-1">
                3 Stocks, 4 MFs, 1 Gold
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* The Tremor Area Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Portfolio Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChart
                className="h-72 mt-4"
                data={portfolioGrowth}
                index="date"
                categories={["value"]}
                colors={["emerald"]}
                valueFormatter={dataFormatter}
                showLegend={false}
                yAxisWidth={100}
                showAnimation={true}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* The New Donut Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <AssetAllocation />
        </motion.div>
      </div>

      {/* Transactions Row */}
      <motion.div variants={itemVariants}>
        <RecentTransactions />
      </motion.div>
    </motion.div>
  );
}
