import './testLinks.scss';

export default function TestLinks() {
  return (
    <section className="testLinks">
      <div className="container">
        <div className="testLinks__card">
          <h2>Образовательные</h2>
          <p className="desc">
            Проверь свои знания по математике, английскому, истории и другим
            предметам. Узнай свой уровень и посмотри, что можно улучшить.
          </p>
        </div>

        <div className="testLinks__card">
          <h2>Психологические</h2>
          <p className="desc">
            Узнай больше о своём характере, типе личности, мышлении и эмоциях.
            Простые и понятные результаты без лишних заморочек.
          </p>
        </div>

        <div className="testLinks__card">
          <h2>Развлекательные</h2>
          <p className="desc">
            Весёлые и лёгкие тесты для настроения. Узнай, какой ты персонаж,
            герой, мем или просто пройди что-нибудь ради фана.
          </p>
        </div>
      </div>
    </section>
  );
}
