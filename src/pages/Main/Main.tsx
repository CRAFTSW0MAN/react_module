import { ApiService } from '../../api/Api';
import { Component, ReactNode } from 'react';
import { Search } from '../../components/Search/Search';
import './_main.module.scss';
import { CardOfPeople } from '../../components/CardOfPeople/CardOfPeople';
import { IdataPeople, IStateMain } from '../../type/interfaces';
import style from './_main.module.scss';
import { Grogu } from '../../components/Grogu/Grogu';
export class Main extends Component {
  inputValueSearch = localStorage.getItem('searchQuery');
  state: IStateMain = {
    arrPeoples: [],
    dataSearch: this.inputValueSearch ? this.inputValueSearch : '',
    grogySpinner: false,
  };

  public componentDidMount(): void {
    this.callApiServer();
  }

  public componentDidUpdate(prevProps: unknown, prevState: IStateMain): void {
    if (prevState.dataSearch !== this.state.dataSearch) {
      this.callApiServer();
    }
  }

  private callApiServer() {
    this.setState({
      grogySpinner: true,
    });
    ApiService.getAllPlanets(this.state.dataSearch).then((response) => {
      this.setState({
        grogySpinner: false,
        arrPeoples: response.results,
      });
    });
  }

  public render(): ReactNode {
    const upDatearrPeoples = (dataSearch: string) => {
      ApiService.getAllPlanets(dataSearch).then((response) => {
        this.setState({
          arrPeoples: response.results,
        });
      });
    };
    const upDateDataSerch = (data: string) => {
      this.setState({
        dataSearch: data,
      });
    };
    return (
      <section className={style.main}>
        <Search upDate={upDatearrPeoples} upDateSearch={upDateDataSerch} />
        {this.state.grogySpinner ? (
          <Grogu />
        ) : (
          <div className={style.main_container}>
            {this.state.arrPeoples.map((elem: IdataPeople, index: number) => {
              return (
                <div key={index}>
                  <CardOfPeople card={elem} />
                </div>
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
