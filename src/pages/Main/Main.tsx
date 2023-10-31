import { ApiService } from '../../api/Api';
import { Component, ReactNode } from 'react';
import { Search } from '../../components/Search/Search';
import './_main.module.scss';
import { CardOfPeople } from '../../components/CardOfPeople/CardOfPeople';
import { IdataPeople, IStateMain } from '../../type/interfaces';
import style from './_main.module.scss';
export class Main extends Component<IStateMain> {
  inputValueSearch = localStorage.getItem('searchQuery');
  state: IStateMain = {
    arrPeoples: [],
    dataSearch: this.inputValueSearch ? this.inputValueSearch : '',
  };

  public componentDidMount(): void {
    ApiService.getAllPlanets(this.state.dataSearch).then((response) => {
      this.setState({
        arrPeoples: response.results,
      });
      console.log(this.state.arrPeoples);
    });
  }

  public render(): ReactNode {
    const upDatearrPeoples = (dataSearch: string) => {
      ApiService.getAllPlanets(dataSearch).then((response) => {
        this.setState({
          arrPeoples: response.results,
        });
        console.log(this.state.arrPeoples);
      });
    };
    return (
      <section className={style.main}>
        <Search upDate={upDatearrPeoples} />
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
