import Image from 'next/image';
import './adviceRegister.scss'
import register from '../../../public/register.jpg'

export default function AdviceRegister() {
  return (
    <section className="adviceRegister">
      <div className="container">
        <div className="adviceRegister__leftContent">
          <h1>Зарегистрируйся и начни проходить тесты прямо сейчас</h1>
          <button className="orangeBtn">Регистрация</button>
          <button className="orangeBtn">Вход</button>
        </div>
        <div className="adviceRegister__rightContent">
            <Image src={register} alt=''/>
        </div>
      </div>
    </section>
  );
}
