import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, ExternalLink, Clock } from "lucide-react";
import Image from "next/image";

// Define the shape of Finnhub's API response
interface FinnhubNewsItem {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

// Helper function to format UNIX timestamps to readable dates
function formatRelativeTime(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
}

// Server-side fetch function
async function getMarketNews(): Promise<FinnhubNewsItem[]> {
  const apiKey = process.env.FINNHUB_API_KEY;

  // If the buyer hasn't added an API key, return graceful fallback data
  if (!apiKey || apiKey === "your_api_key_here") {
    return [
      {
        id: 1,
        category: "technology",
        datetime: Math.floor(Date.now() / 1000),
        headline:
          "Please enter your Finnhub API Key in .env.local to see live news.",
        image: "",
        related: "",
        source: "System Message",
        url: "#",
        summary: "Fallback data active.",
      },
    ];
  }

  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`,
      {
        next: { revalidate: 3600 }, // Cache the news for 1 hour to prevent API rate limits
      },
    );

    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();
    return data.slice(0, 15); // Only return the latest 15 articles
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

// Notice this is now an ASYNC Server Component (no "use client")
export default async function NewsPage() {
  const liveNews = await getMarketNews();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg text-primary">
          <Newspaper className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Live Market News
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Real-time updates powered by Finnhub.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {liveNews.map((news) => (
          <a
            key={news.id}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block outline-none"
          >
            <Card className="hover:shadow-md transition-shadow cursor-pointer group h-full">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Optional Image Thumbnail from the API */}
                  {news.image && (
                    <div className="hidden md:block shrink-0 overflow-hidden rounded-md w-32 h-24 bg-slate-100 relative">
                      <img
                        src={news.image}
                        alt={news.headline}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs font-normal uppercase tracking-wider"
                      >
                        {news.category}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="text-xs font-normal bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {news.source}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 group-hover:text-primary transition-colors line-clamp-2">
                      {news.headline}
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                      {news.summary}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400 pt-2">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatRelativeTime(news.datetime)}
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center text-slate-400 group-hover:text-primary transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
