export async function fetchMarkdown(path: string): Promise<string> {
    try {
      const response = await fetch(`/md/${path}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch markdown from ${path}`);
      }
      return await response.text();
    } catch (error) {
      console.error("Markdown fetch error:", error);
      throw error;
    }
  }
  