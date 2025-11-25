import { Card } from "@/components/ui/card";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const MAX_DAYS = 100;

const FALLBACK_DATA: ContributionDay[] = Array.from(
  { length: MAX_DAYS },
  (_, idx) => ({
    date: `fallback-${idx}`,
    count: 0,
    level: 0,
  })
);

async function fetchRecentContributions(): Promise<ContributionDay[]> {
  try {
    const response = await fetch(
      "https://github-contributions-api.jogruber.de/v4/rahulr-dev?y=last",
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch contributions: ${response.statusText}`);
    }

    const data = await response.json();
    const contributions: ContributionDay[] = data?.contributions ?? [];

    if (!contributions.length) {
      return FALLBACK_DATA;
    }

    return contributions.slice(-MAX_DAYS);
  } catch (error) {
    console.error(error);
    return FALLBACK_DATA;
  }
}

const LEVEL_CLASSES = [
  "bg-muted border-border",
  "bg-emerald-200/70 border-emerald-200/60",
  "bg-emerald-300/70 border-emerald-300/60",
  "bg-emerald-400/80 border-emerald-400/60",
  "bg-emerald-500/90 border-emerald-500/60",
];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

export async function GithubChartCard() {
  const contributions = await fetchRecentContributions();

  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-1 flex flex-col items-center justify-center gap-2 p-3 sm:p-4 text-center border-muted/40 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all group">
      <div className="grid grid-flow-col grid-rows-7 gap-x-1.5 gap-y-1">
        {contributions.map((day) => {
          const levelClass = LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0];
          const formattedDate = dateFormatter.format(new Date(day.date));

          return (
            <span
              key={day.date}
              className={`size-2.5 sm:size-2.5 rounded-[2px] border transition-colors duration-200 ${levelClass}`}
              title={`${formattedDate}: ${day.count} contribution${
                day.count === 1 ? "" : "s"
              }`}
              aria-label={`${day.count} contribution${
                day.count === 1 ? "" : "s"
              } on ${formattedDate}`}
            />
          );
        })}
      </div>
      {/* <p className="text-[5px] sm:text-[5px] uppercase tracking-[0.2em] text-muted-foreground">
        Last {MAX_DAYS} days
      </p> */}
    </Card>
  );
}
