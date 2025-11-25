import Image from 'next/image';
import search from '../../../public/search.svg';
import youtube from '../../../public/youtube.svg';
import telegram from '../../../public/telegram.svg';
import instagram from '../../../public/instagram.svg';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__navs">
          <a href="" className="header__navs__nav">
            Главная
          </a>
          <a href="" className="header__navs__nav">
            О нас
          </a>
          <a href="" className="header__navs__nav">
            Тесты
          </a>
        </div>

        <div className="header__input__wrapper">
          <button>
            <Image src={search} alt="" className="header__input__decoration" />
          </button>

          <input
            type="text"
            placeholder="Найди свой тест..."
            className="header__input"
          />
        </div>

        <div className="header__login__navs">
          <a href="" className="header__login__navs__nav">
            Регистрация
          </a>
          <a href="" className="header__login__navs__nav">
            Вход
          </a>
        </div>

        <div className="header__socials">
          <a href="" className="header__socials__link">
            <Image src={youtube} alt=''/>
          </a>
          <a href="" className="header__socials__link">
            <Image src={telegram} alt=''/>
          </a>
          <a href="" className="header__socials__link">
            <Image src={instagram} alt=''/>
          </a>
        </div>
      </div>
    </header>
  );
}
