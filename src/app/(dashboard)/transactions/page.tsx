import { RecentTransactions } from "@/components/dashboard/RecentTransactions";

export default function TransactionsPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Transaction History
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          View and download all your past investments, SIPs, and deposits.
        </p>
      </div>

      {/* Reusing our awesome component to make a full-page data view! */}
      <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border">
        <RecentTransactions />
      </div>
    </div>
  );
}
