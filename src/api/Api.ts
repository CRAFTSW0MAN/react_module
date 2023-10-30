export class ApiService {
  private static baseUrl = `https://swapi.dev/api/people/`;
  public static async getAllPlanets()  {
    const res: Response = await fetch(`${this.baseUrl}`, {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    });
    const json = await res.json();
    console.log(json);
    return json;
  }

  // public static async getWinners(): Promise<IGetWinners> {
  //   const res: Response = await fetch(`${BaseUrl}${EndPoint.winners}`);
  //   return {
  //     item: await res.json(),
  //     count: res.headers.get('X-Total-Count') || '0',
  //   };
  // }

  // public static async deleteWinner(id: number): Promise<void> {
  //   await fetch(`${BaseUrl}${EndPoint.winners}/${id}`, {
  //     method: 'DELETE',
  //   });
  // }
  // public static async StatusCar(id: string, started: string): Promise<IRace> {
  //   const res: Response = await fetch(
  //     `${BaseUrl}${EndPoint.engine}?id=${id}&status=${started}`,
  //     {
  //       method: 'PATCH',
  //     }
  //   );
  //   const json = await res.json();
  //   console.log(json);
  //   return json;
  // }

  // public static async getAllCars(): Promise<IDataCarsResponse> {
  //   const res: Response = await fetch(`${BaseUrl}${EndPoint.garage}`);
  //   return {
  //     item: await res.json(),
  //     count: res.headers.get('X-Total-Count') || '0',
  //   };
  // }

  // public static async getCars(
  //   elems: IGenerateRes[]
  // ): Promise<IDataCarsResponse> {
  //   const params = (items: IGenerateRes[]): string =>
  //     items
  //       .map((item: IGenerateRes): string => `${item.key}=${item.value}`)
  //       .join('&');
  //   const res: Response = await fetch(
  //     `${BaseUrl}${EndPoint.garage}?${params(elems)}`
  //   );
  //   return {
  //     item: await res.json(),
  //     count: res.headers.get('X-Total-Count') || '0',
  //   };
  // }

  // public static async getCar(id: number): Promise<DataCar> {
  //   const res: Response = await fetch(`${BaseUrl}${EndPoint.garage}/${id}`);
  //   const json = await res.json();
  //   return json;
  // }

  // public static async createCar(
  //   body: DataCreateCar
  // ): Promise<IDataCarsResponse> {
  //   const res: Response = await fetch(`${BaseUrl}${EndPoint.garage}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   });
  //   return {
  //     item: await res.json(),
  //     count: res.headers.get('X-Total-Count') || '0',
  //   };
  // }
}
