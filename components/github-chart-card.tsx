import { ContributionGrid } from "@/components/contribution-grid";

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

export async function GithubChartCard() {
  const contributions = await fetchRecentContributions();

  return <ContributionGrid contributions={contributions} />;
}
