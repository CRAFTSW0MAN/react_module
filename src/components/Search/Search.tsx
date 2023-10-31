import { ChangeEvent, Component, ReactNode } from 'react';
import SearchLogo from '../../../public/assets/images/search.png';
import DeleteLogo from '../../../public/assets/images/delete.png';
import style from './_search.module.scss';
import { IStateSearch } from '../../type/interfaces';
export class Search extends Component<{
  upDate: (dataSearch: string) => void;
}> {
  inputValueSearch = localStorage.getItem('searchQuery');
  constructor(props: { upDate: (dataSearch: string) => void }) {
    super(props);
  }
  state: IStateSearch = {
    search: this.inputValueSearch ? this.inputValueSearch : '',
  };

  private OnChangeInput(e: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      search: e.target.value,
    });
  }
  private OnClickButtonSearch(): void {
    localStorage.setItem('searchQuery', this.state.search);
    console.log(this.state.search);
    this.props.upDate(this.state.search);
  }
  private OnClickButtonDelete(): void {
    localStorage.setItem('searchQuery', '');
    this.setState({
      search: '',
    });
    const emptyString = '';
    this.props.upDate(emptyString);
  }
  public render(): ReactNode {
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
          autoFocus={true}
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
