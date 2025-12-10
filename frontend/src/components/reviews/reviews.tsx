import Image from 'next/image';
import './reviews.scss';
import avatar from '../../../public/avatar.svg';

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <h1>Отзывы</h1>
        <div className="reviews__cards">
          <div className="reviews__card">
            <div className="reviews__card__user">
              <Image src={avatar} alt="" className='reviews__card__user__avatar'/>
              <div>
                <div className="reviews__card__user__name">Анатолий</div>
                <div className="reviews__card__user__rewDate">21.10.25</div>
              </div>
            </div>

            <div className="reviews__card__review">
              Очень понравился тест! Вопросы простые и понятные, а результат
              оказался удивительно точным. Проходится быстро, но всё по делу —
              реально помогает лучше понять себя.
            </div>
          </div>

          
          <div className="reviews__card">
            <div className="reviews__card__user">
              <Image src={avatar} alt="" className='reviews__card__user__avatar'/>
              <div>
                <div className="reviews__card__user__name">Анатолий</div>
                <div className="reviews__card__user__rewDate">21.10.25</div>
              </div>
            </div>

            <div className="reviews__card__review">
              Очень понравился тест! Вопросы простые и понятные, а результат
              оказался удивительно точным. Проходится быстро, но всё по делу —
              реально помогает лучше понять себя.
            </div>
          </div>
        </div>

        <div className="buttonCWrapper"><button className="orangeBtn">Смотреть все отзывы</button></div>
      </div>
    </section>
  );
}
