export function ApiService(page: number, search: string) {
  const baseUrl = `https://swapi.dev/api/people/`;
  async function getAllPlanets(page: number, search: string) {
    const res: Response = await fetch(
      `${baseUrl}?page=${page}${search.length ? `&search=${search}` : ''}`,
      {
        method: 'GET',
      }
    );
    const json = await res.json();
    return json;
  }

  return getAllPlanets(page, search);
}

export function ApiPeople(id: string) {
  const baseUrl = `https://swapi.dev/api/people/`;
  async function getAllPlanets() {
    const res: Response = await fetch(`${baseUrl}/${id}`, {
      method: 'GET',
    });
    const json = await res.json();
    return json;
  }

  return getAllPlanets();
}
