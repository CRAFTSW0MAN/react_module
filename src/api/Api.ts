export function ApiService(search: string) {
  const baseUrl = `https://swapi.dev/api/people/`;
  async function getAllPlanets(search: string) {
    const res: Response = await fetch(
      `${baseUrl}${search.length ? `?search=${search}` : ''}`,
      {
        method: 'GET',
      }
    );
    const json = await res.json();
    return json.results;
  }

  return getAllPlanets(search);
}
