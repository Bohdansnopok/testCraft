import Image from 'next/image';
import avatar from '../../../public/avatar.svg';
import userIcon from '../../../public/user.svg';
import './allTests.scss';
import '../../components/lastTests/lastTests.scss';
import '../../components/reviews/reviews.scss';

export default function AllTests() {
  return (
    <section className="allTests">
      <div className="container">
        <h1>Все тесты</h1>
        <div className="allTests__selections">
          <select
            name="testDate-select"
            id="testDate-select"
            className="allTests__selections__select"
          >
            <option value="new">Сначало новые</option>
            <option value="old">Сначало старые</option>
          </select>

          <select
            name="testCategory-select"
            id="testCategory-select"
            className="allTests__selections__select"
          >
            <option value="study">Образовательные</option>
            <option value="psychology">Психологические</option>
            <option value="happy">Развлекательные</option>
          </select>
        </div>

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
    </section>
  );
}
