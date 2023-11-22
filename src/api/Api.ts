export function ApiService(search: string, limit: number, skip: number) {
  const baseUrl = `https://dummyjson.com/products/`;
  async function getAllPlanets(search: string, limit: number, skip: number) {
    const res: Response = await fetch(
      `${baseUrl}search?q=${search}&skip=${limit * skip}&limit=${limit}`
    );
    const json = await res.json();
    return json;
  }

  return getAllPlanets(search, limit, skip);
}

export function ApiProduct(id: string) {
  const baseUrl = `https://dummyjson.com/products/`;
  async function getAllPlanets() {
    const res: Response = await fetch(`${baseUrl}/${id}`);
    const json = await res.json();
    return json;
  }

  return getAllPlanets();
}
