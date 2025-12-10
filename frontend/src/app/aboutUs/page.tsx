import Image from 'next/image';
import testImage from '../../../public/testImage.jpg';
import './aboutUs.scss';

export default function AboutUsPage() {
  return (
    <section className="aboutUs">
      <div className="container">
        <div className="aboutUs__leftContent">
          <Image src={testImage} alt="" />
        </div>
        <div className="aboutUs__rightContent">
          <h1>О нас</h1>
          <div className="aboutUs__content">
            Добро пожаловать на наш образовательный проект! Мы создали этот
            сайт, чтобы сделать обучение проще, быстрее и интереснее. Здесь ты
            найдёшь тесты по школьным предметам, которые помогут проверить
            знания, подготовиться к контрольной или просто потренироваться для
            себя. Мы каждый день работаем над тем, чтобы добавлять новые
            материалы, обновлять задания и делать платформу ещё удобнее. Наша
            цель — дать тебе возможность учиться без стресса, в своём темпе и в
            любое время.
          </div>

          <div className='aboutUs__title'>Что мы предлагаем:</div>
          <ul className="aboutUs__offerList">
            <li>тесты по разным школьным предметам</li>
            <li>быстрые результаты и пояснения</li>
            <li>современный и удобный интерфейс</li>
            <li>регулярные обновления и новые темы</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
