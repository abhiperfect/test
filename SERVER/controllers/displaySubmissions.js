import { fetchAllSubmissions } from './fetchAllSubmissions.js';

export async function displaySubmissions(req, res) {
  try {
    const allSubmissions = await fetchAllSubmissions();
    res.render("displaySubmissions.ejs", { allSubmissions });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    res.status(500).send("Internal Server Error");
  }
}
