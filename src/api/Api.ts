import { IdataProduct } from '../type/interfaces..interface';

export async function ApiService(search: string, limit: number, skip: number) {
  const baseUrl = `https://dummyjson.com/products/`;
  const res: Response = await fetch(
    `${baseUrl}search?q=${search}&skip=${limit * skip}&limit=${limit}`
  );
  return await res.json();
}

export async function ApiProduct(id: string): Promise<IdataProduct> {
  const baseUrl = `https://dummyjson.com/products/`;
  const res: Response = await fetch(`${baseUrl}/${id}`);

  return await res.json();
}
