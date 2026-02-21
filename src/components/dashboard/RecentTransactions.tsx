import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { recentTransactions } from "@/data/data";

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Recent Transactions
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Your latest SIP and digital gold investments.
        </p>
      </div>
      <div className="rounded-md border bg-card text-card-foreground">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTransactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell className="font-medium">{tx.asset}</TableCell>
                <TableCell>{tx.type}</TableCell>
                <TableCell className="text-slate-500">{tx.date}</TableCell>
                <TableCell className="text-right font-medium">{tx.amount}</TableCell>
                <TableCell className="text-right">
                  {/* Custom Status Badge */}
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    tx.status === 'Success' 
                      ? 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-900/20 dark:text-green-400 dark:ring-green-400/20'
                      : 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-900/20 dark:text-yellow-400 dark:ring-yellow-400/20'
                  }`}>
                    {tx.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}