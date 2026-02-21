import { TrendingUp, Briefcase } from "lucide-react";
export const recentTransactions = [
  {
    id: "TX-1049",
    asset: "Digital Gold (24K)",
    type: "Buy",
    date: "2026-02-20",
    amount: "₹5,000",
    status: "Success",
  },
  {
    id: "TX-1048",
    asset: "NIFTY 50 Index Fund",
    type: "SIP",
    date: "2026-02-15",
    amount: "₹10,000",
    status: "Success",
  },
  {
    id: "TX-1047",
    asset: "Reliance Industries",
    type: "Buy",
    date: "2026-02-12",
    amount: "₹25,000",
    status: "Success",
  },
  {
    id: "TX-1046",
    asset: "HDFC Bank",
    type: "Sell",
    date: "2026-02-10",
    amount: "₹15,500",
    status: "Pending",
  },
  {
    id: "TX-1045",
    asset: "SGB Series III",
    type: "Buy",
    date: "2026-02-05",
    amount: "₹12,000",
    status: "Success",
  },
];

export const portfolioGrowth = [
  { date: "Sep 25", value: 120000 },
  { date: "Oct 25", value: 135000 },
  { date: "Nov 25", value: 132000 },
  { date: "Dec 25", value: 150000 },
  { date: "Jan 26", value: 168000 },
  { date: "Feb 26", value: 185000 },
];
export const assetAllocation = [
  { name: "Stocks", value: 85000 },
  { name: "Mutual Funds", value: 65000 },
  { name: "Digital Gold", value: 20000 },
  { name: "Liquid Cash", value: 15000 },
];
export const topPerformingAssets = [
  { name: "Netweb Technologies", value: 3527, icon: TrendingUp },
  { name: "Tata Investment Corp", value: 692, icon: TrendingUp },
  { name: "Newgen Software", value: 622, icon: TrendingUp },
  { name: "Oil India Ltd", value: 476, icon: TrendingUp },
  { name: "Digital Gold (24K)", value: 78, icon: Briefcase },
];

export const marketNews = [
  {
    id: 1,
    title: "Nifty50 surges 116 points; BSE Sensex settles 316 points higher",
    source: "Market Watch",
    time: "2 hours ago",
    category: "Equities",
    impact: "Positive",
  },
  {
    id: 2,
    title:
      "Global investors stung by AI could turn to India, lured by domestic demand",
    source: "Financial Express",
    time: "4 hours ago",
    category: "Global",
    impact: "Positive",
  },
  {
    id: 3,
    title: "Gold rates rise amid escalating geopolitical tensions",
    source: "Commodity Desk",
    time: "5 hours ago",
    category: "Commodities",
    impact: "Neutral",
  },
  {
    id: 4,
    title: "IT stocks show weakness as US markets close in the red",
    source: "Tech Insights",
    time: "6 hours ago",
    category: "Sectors",
    impact: "Negative",
  },
];
