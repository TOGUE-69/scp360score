export default async function handler(req, res) {
  const date = req.query.date;
  const URL = `https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=${date}`;
  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'dd4bf9bdbdmsh73f45643f1efaa7p1a8174jsna126a7e533a0',
        'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}
