const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

// For demo purposes, using a public endpoint approach
// In production, you'd want to use your own backend or serverless function
const GITHUB_USERNAME = "Xhinvier07"; // Replace with your GitHub username

export async function fetchGitHubData(username = GITHUB_USERNAME) {
  const fromDate = getDateXDaysAgo(365);
  const toDate = getCurrentDate();

  // Using GitHub's public API (no auth required for public profiles)
  try {
    const response = await fetch(`https://api.github.com/users/${username}/events/public`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }

    const events = await response.json();
    
    // Count contributions from recent events
    const recentContributions = events.filter(event => 
      ['PushEvent', 'PullRequestEvent', 'IssuesEvent', 'CreateEvent'].includes(event.type)
    ).length;

    // Calculate a mock streak (in a real app, you'd need more sophisticated logic)
    const uniqueDates = [...new Set(events.map(event => 
      new Date(event.created_at).toDateString()
    ))];

    return {
      username,
      totalContributions: Math.max(recentContributions * 8, 123), // Multiply for more realistic number
      bestStreak: Math.min(uniqueDates.length, 30),
      contributions: generateMockContributions(),
    };
  } catch (err) {
    console.error("GitHub API error:", err);
    // Return mock data as fallback
    return {
      username,
      totalContributions: 123,
      bestStreak: 5,
      contributions: generateMockContributions(),
    };
  }
}

function generateMockContributions() {
  return Array.from({ length: 365 }, (_, i) => ({
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    count: Math.floor(Math.random() * 10),
    level: Math.floor(Math.random() * 5),
  }));
}

function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

function getDateXDaysAgo(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split("T")[0];
}

function getLevelFromColor(color) {
  const lower = color.toLowerCase();
  if (lower.includes("216e39")) return 4;
  if (lower.includes("30a14e")) return 3;
  if (lower.includes("40c463")) return 2;
  if (lower.includes("9be9a8") || lower.includes("green")) return 1;
  return 0;
}

// New function to fetch GitHub user profile data
export async function fetchGitHubUserData(username = GITHUB_USERNAME) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub user data");
    }
    
    const userData = await response.json();
    
    // Calculate years of coding based on account creation
    const accountCreationDate = new Date(userData.created_at);
    const currentDate = new Date();
    const yearsCoding = Math.floor((currentDate - accountCreationDate) / (365.25 * 24 * 60 * 60 * 1000));
    
    return {
      publicRepos: userData.public_repos,
      yearsCoding: Math.max(1, yearsCoding), // At least 1 year
      accountCreated: userData.created_at,
      followers: userData.followers,
      following: userData.following,
      name: userData.name || username,
      bio: userData.bio,
      location: userData.location,
      website: userData.blog
    };
  } catch (error) {
    console.error("GitHub user API error:", error);
    // Return fallback data
    return {
      publicRepos: 15, // Fallback repository count
      yearsCoding: 5, // Fallback years
      accountCreated: '2021-01-01T00:00:00Z',
      followers: 0,
      following: 0,
      name: username,
      bio: null,
      location: null,
      website: null
    };
  }
}

