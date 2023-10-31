import { Component } from 'react';
import SearchLogo from '../../../public/assets/images/search.png';
import DeleteLogo from '../../../public/assets/images/delete.png';
import style from './_search.module.scss';
export class Search extends Component {
  render() {
    return (
      <div className={style.search}>
        <input className={style.search_input}type="text" placeholder="Search..." onChange={(e): void => {console.log(e.target)}}/>
        <button className={style.search_button}>
          <img className={style.search_button_img}src={SearchLogo} alt="SearchLogo" />
        </button>
        <button className={style.search_button}>
          <img className={style.search_button_img}src={DeleteLogo} alt="DeleteLogo" />
        </button>
      </div>
    );
  }
}
