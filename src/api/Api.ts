import { Component } from 'react';

export class ApiService extends Component {
  private static baseUrl = `https://swapi.dev/api/people/`;
  public static async getAllPlanets(search: string) {
    const res: Response = await fetch(
      `${this.baseUrl}${search.length ? `?search=${search}` : ''}`,
      {
        method: 'GET',
      }
    );
    const json = await res.json();
    return json;
  }
}
