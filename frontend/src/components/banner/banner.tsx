import Image from "next/image";
import './banner.scss'
import math from '../../../public/math.svg'
import english from '../../../public/english.svg'
import biologia from '../../../public/biologia.svg'
import study from '../../../public/study.jpg'

export default function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__leftContent">
                    <a href="" className="subject">
                        <Image src={math} alt=""/>
                        <h1>Математика</h1>
                    </a>
                    <a href="" className="subject">
                        <Image src={english} alt=""/>
                        <h1>Английский язык</h1>
                    </a>
                    <a href="" className="subject">
                        <Image src={biologia} alt=""/>
                        <h1>Биология</h1>
                    </a>
                </div>
                <div className="banner__rightContent">
                    <h2>Выбирай свой тест и учись  вместе с нами</h2>
                    <Image src={study} alt=""/>
                </div>  
            </div>
        </section>
    )
}