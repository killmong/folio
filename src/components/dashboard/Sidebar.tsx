"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Home,
  PieChart,
  ArrowLeftRight,
  Newspaper,
  Settings,
  Menu,
  TrendingUp,
  Sun,
  Moon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { LogOut } from "lucide-react";
const navItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Portfolio", href: "/portfolio", icon: PieChart },
  { name: "Transactions", href: "/transactions", icon: ArrowLeftRight },
  { name: "Market News", href: "/news", icon: Newspaper },
  { name: "Settings", href: "/settings", icon: Settings },
];

// The parent container that controls the cascading delay for the sidebar
const sidebarContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// The individual animation for the logo, links, and toggle
const sidebarItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

// Extracted outside to prevent re-mounting
function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1 mt-4 flex-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <motion.div key={item.name} variants={sidebarItemVariants}>
            <Link
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all font-medium text-sm
                ${
                  isActive
                    ? "bg-primary/10 text-primary dark:bg-primary/20"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-50 dark:hover:bg-slate-800/50"
                }`}
            >
              <item.icon
                className={`h-4 w-4 ${isActive ? "text-primary" : ""}`}
              />
              {item.name}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}

// Extracted outside to maintain its own state safely
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mt-auto pt-4 border-t space-y-2">
      {/* Our New Sign Out Button */}
      <Button
        variant="ghost"
        className="w-full justify-start gap-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        asChild
      >
        <Link href="/login">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Link>
      </Button>

      {/* The Existing Theme Toggle */}
      <Button
        variant="ghost"
        className="w-full justify-start gap-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-4 w-4 block dark:hidden" />
        <Moon className="h-4 w-4 hidden dark:block" />
        Toggle Theme
      </Button>
    </div>
  );
}

export function Sidebar() {
  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden m-4 absolute top-0 left-0 z-50"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[250px] border-r-0 bg-white dark:bg-slate-950 flex flex-col"
        >
          {/* Apply animation when the mobile sheet opens */}
          <motion.div
            variants={sidebarContainerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col h-full"
          >
            <SheetHeader className="text-left">
              <motion.div variants={sidebarItemVariants}>
                <SheetTitle className="flex items-center gap-2 font-bold text-xl text-primary">
                  <TrendingUp className="h-6 w-6" />
                  folio
                </SheetTitle>
              </motion.div>
            </SheetHeader>
            <NavLinks />
            <ThemeToggle />
          </motion.div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <motion.div
        variants={sidebarContainerVariants}
        initial="hidden"
        animate="show"
        className="hidden border-r bg-white dark:bg-slate-950 md:flex flex-col w-[250px] min-h-screen p-4 sticky top-0"
      >
        <motion.div
          variants={sidebarItemVariants}
          className="flex h-14 items-center gap-2 font-bold text-2xl text-primary border-b pb-4 mb-2"
        >
          <TrendingUp className="h-6 w-6" />
          <Link href="/">folio</Link>
        </motion.div>
        <NavLinks />
        <ThemeToggle />
      </motion.div>
    </>
  );
}
