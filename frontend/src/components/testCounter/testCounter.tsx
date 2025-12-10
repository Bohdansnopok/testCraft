import Image from 'next/image'
import './testCounter.scss'
import checkmark from '../../../public/checkmark.svg'

export default function TestCounter() {
    return (
        <section className="testCounter">
            <div className="container">
                <Image src={checkmark} alt=''/>
                <h1>22222 тестов уже пройдено</h1>
                <Image src={checkmark} alt=''/>
            </div>
        </section>
    )
}