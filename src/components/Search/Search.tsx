import { ChangeEvent, Component } from 'react';
import SearchLogo from '../../../public/assets/images/search.png';
import DeleteLogo from '../../../public/assets/images/delete.png';
import style from './_search.module.scss';
import { IStateSearch } from '../../type/interfaces';
import { ApiService } from '../../api/Api';
export class Search extends Component {
  inputValueSearch = localStorage.getItem('searchQuery');
  state: IStateSearch = {
    search: this.inputValueSearch ? this.inputValueSearch : '',
  };

  OnChangeInput(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      search: e.target.value,
    });
  }
  OnClickButtonSearch() {
    localStorage.setItem('searchQuery', this.state.search);
    ApiService.getAllPlanets(this.state.search).then((response) => {
      console.log(response);
    });
  }
  OnClickButtonDelete() {
    localStorage.setItem('searchQuery', '');
    this.setState({
      search: '',
    });
    ApiService.getAllPlanets(this.state.search).then((response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <div className={style.search}>
        <input
          className={style.search_input}
          type="text"
          placeholder="Search..."
          onChange={(e): void => {
            this.OnChangeInput(e);
          }}
          value={this.state.search}
        />
        <button
          className={style.search_button}
          onClick={() => this.OnClickButtonSearch()}
        >
          <img
            className={style.search_button_img}
            src={SearchLogo}
            alt="SearchLogo"
          />
        </button>
        <button
          className={style.search_button}
          onClick={() => this.OnClickButtonDelete()}
        >
          <img
            className={style.search_button_img}
            src={DeleteLogo}
            alt="DeleteLogo"
          />
        </button>
      </div>
    );
  }
}
