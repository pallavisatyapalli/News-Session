export default async function handler(req, res) {
  const API_KEY = process.env.GNEWS_API_KEY;

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?country=us&lang=en&category=general&token=${API_KEY}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}