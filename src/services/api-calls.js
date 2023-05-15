const baseUrl = "https://www.dnd5eapi.co"

export async function getMovies() {
  const res = await fetch(`${baseUrl}/api/classes`)
  return res.json()
}