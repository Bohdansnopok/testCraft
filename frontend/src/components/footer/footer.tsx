import './footer.scss';
import telegram from '../../../public/telegram.svg';
import instagram from '../../../public/telegram.svg';
import youtube from '../../../public/telegram.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright footer__navs__nav">Copyright 2021@</div>
        <div className="privacyPolice footer__navs__nav">Privacy Police</div>
        <div className='footer__leftWrapper'>
          <div className="footer__navs">
            <a href="" className='footer__navs__nav'>Главная</a>
            <a href="" className='footer__navs__nav'>О нас</a>
            <a href="" className='footer__navs__nav'>Тесты</a>
            <a href="" className='footer__navs__nav'>Регистрация</a>
            <a href="" className='footer__navs__nav'>Вход</a>
          </div>
          <div className="footer__socials">
            <Image src={telegram} alt='' />
            <Image src={instagram} alt='' />
            <Image src={youtube} alt='' />
          </div>
        </div>
      </div>
    </footer>
  );
}