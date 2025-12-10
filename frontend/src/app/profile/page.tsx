import Image from 'next/image';
import avatarBig from '../../../public/avatarBig.svg';
import './profile.scss';
import '../../components/lastTests/lastTests.scss';
import '../../components/reviews/reviews.scss';
import avatar from '../../../public/avatar.svg';
import userIcon from '../../../public/user.svg';

export default function Profile() {
  return (
    <section className="profile">
      <div className="container">
        <h1>Профиль</h1>
        <div className="profile__top">
          <div className="profile__top__user">
            <Image src={avatarBig} alt="" />
            <div>
              <div className="profile__top__user__name">Анатолий</div>
              <div className="profile__top__user__completedTests">
                100 пройденых тестов
              </div>
              <div className="profile__top__user__createdTests">
                100 созданых тестов
              </div>
            </div>
          </div>

          <a href="" className="orangeBtn">
            Создать тест
          </a>
        </div>

        <div className="profile__completedTests">
          <h1>Пройденные тесты</h1>

          <div className="lastTests__list">
            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>

            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>

            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>

            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>

            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>
          </div>
        </div>

        <div className="profile__createdTests">
          <h1>Созданные тесты</h1>

          <div className="lastTests__list">
            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>

            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>

            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>

            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>

            <div className="lastTests__list__card">
              <div className="lastTests__list__card__top">
                <div className="reviews__card__user">
                  <Image
                    src={avatar}
                    alt=""
                    className="reviews__card__user__avatar"
                  />
                  <div>
                    <div className="reviews__card__user__name">Анатолий</div>
                    <div className="reviews__card__user__rewDate">21.10.25</div>
                  </div>
                </div>

                <div className="lastTests__list__card__testCompleted">
                  2
                  <Image src={userIcon} alt="" />
                </div>
              </div>

              <div className="lastTests__list__card__name">Math test</div>
              <div className="lastTests__list__card__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                porro corporis neque totam voluptatum! Quae sapiente iure nobis
                magnam, natus asperiores nihil excepturi autem laudantium
                molestiae, ipsum ab amet adipisci.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
