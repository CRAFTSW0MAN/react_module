import { Component } from 'react';
import { Header } from '../components/Header/Header';
import { Main } from '../pages/Main/Main';
import style from './_app.module.scss';

export class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <Main />
      </div>
    );
  }
}
