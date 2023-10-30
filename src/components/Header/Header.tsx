import { Component, ReactNode } from 'react';
import soundtrack from '../../../public/audio/zvezdnye-vojny-enikin-i-padme_(zzz.fm).mp3';
import style from './_header.module.scss';
import logo from '../../../public/assets/images/star-wars-logo-png-image.png';

type HeaderState = {
  isPlaying: boolean;
};

export class Header extends Component {
  audio: HTMLAudioElement | null = null;
  state: HeaderState = {
    isPlaying: false,
  };

  public componentDidMount(): void {
    this.initializeAudio();
  }
  private initializeAudio(): void {
    this.audio = new Audio(soundtrack);
    this.audio.volume = 0.2;
  }

  private toggleMusic(): void {
    if (this.audio) {
      if (this.state.isPlaying) {
        this.audio.pause();
        this.setState({
          isPlaying: false,
        });
      } else {
        this.audio.play();
        this.setState({
          isPlaying: true,
        });
      }
    }
  }

  public render(): ReactNode {
    return (
      <header className={style.header}>
        <div className={style.header_logo}>
          <img className={style.logo_img}  src={logo} alt="logo" />
          <div className={style.logo_name}>
            <span className={style.name_span1}>Star Wards</span>
            <span className={style.name_span2}> Wikipedia</span>
          </div>
        </div>
        <nav className={style.header_nav}>
          <div>Main</div>
        </nav>
        <button className={style.button_music} onClick={() => this.toggleMusic()}>
          {this.state.isPlaying ? 'Pause Music' : 'Play Music'}
        </button>
      </header>
    );
  }
}
