import '../registration/registration.scss'

export default function Login() {
    return (
        <section className="registration">
            <h1>Вход</h1>
            <form className="registration__form">
                <input type="text" placeholder='Введите свое имя'/>
                <input type="email" placeholder='Введите свою почту'/>
                <input type="password" placeholder='Введите свой пароль'/>
                <input type="password" placeholder='Подтвердите свой пароль'/>
            </form>
        </section>
    )
}