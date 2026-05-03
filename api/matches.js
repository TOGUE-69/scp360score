export default async function handler(req, res) {
  const { date } = req.query;
  const url = `https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=${date || '2024-05-03'}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.RAPID_KEY,
        'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erreur API" });
  }
}
