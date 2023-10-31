import { ApiService } from '../../api/Api';
import { Component } from 'react';
import { Search } from '../../components/Search/Search';
import './_main.module.scss';
import { CardOfPeople } from '../../components/CardOfPeople/CardOfPeople';
import { IdataPeople } from '../../type/interfaces';
import style from './_main.module.scss';
export class Main extends Component {
  state = {
    arrPeoples: [],
  };

  componentDidMount() {
    ApiService.getAllPlanets().then((response) => {
      this.setState({
        arrPeoples: response.results,
      });
      console.log(this.state.arrPeoples);
    });
  }
  render() {
    return (
      <section className={style.main}>
        <Search />
        <div className={style.main_container}>
          {this.state.arrPeoples.map((elem: IdataPeople, index: number) => {
            return (
              <div key={index}>
                <CardOfPeople card={elem} />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
// {
//   "name": "Kamino",
//   "rotation_period": "27",
//   "orbital_period": "463",
//   "diameter": "19720",
//   "climate": "temperate",
//   "gravity": "1 standard",
//   "terrain": "ocean",
//   "surface_water": "100",
//   "population": "1000000000",
//   "residents": [
//       "https://swapi.dev/api/people/22/",
//       "https://swapi.dev/api/people/72/",
//       "https://swapi.dev/api/people/73/"
//   ],
//   "films": [
//       "https://swapi.dev/api/films/5/"
//   ],
//   "created": "2014-12-10T12:45:06.577000Z",
//   "edited": "2014-12-20T20:58:18.434000Z",
//   "url": "https://swapi.dev/api/planets/10/"
// }
