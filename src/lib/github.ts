export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  topics: string[];
  updated_at: string;
}

export async function fetchGitHubRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/hamzaaliabdalazez-bot/repos?sort=updated&per_page=100"
  );
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data
    .filter((r: Repo) => !r.fork && !r.name.includes(".github"))
    .sort(
      (a: Repo, b: Repo) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
}
