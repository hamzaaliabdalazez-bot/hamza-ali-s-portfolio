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
  liveUrl?: string | null;
}

async function checkNetlifyUrl(name: string): Promise<string | null> {
  const url = `https://${name}.netlify.app`;
  try {
    await fetch(url, { method: "HEAD", mode: "no-cors" });
    return url;
  } catch {
    return null;
  }
}

export async function fetchGitHubRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/hamzaaliabdalazez-bot/repos?sort=updated&per_page=100"
  );
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  const repos: Repo[] = data
    .filter((r: Repo) => !r.fork && !r.name.includes(".github"))
    .sort(
      (a: Repo, b: Repo) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

  await Promise.all(
    repos.map(async (repo) => {
      if (repo.homepage?.trim()) {
        repo.liveUrl = repo.homepage.trim();
      } else {
        repo.liveUrl = await checkNetlifyUrl(repo.name);
      }
    })
  );

  return repos;
}
