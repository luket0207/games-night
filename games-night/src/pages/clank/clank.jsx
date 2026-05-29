import './clank.scss';

function ClankPage({ content }) {
  return (
    <section className="clank-page">
      <div aria-hidden="true" className="clank-page__glow" />

      <div className="clank-page__stack">
        <header className="clank-page__hero">
          <p className="clank-page__badge">{content.badge}</p>
          <h1 className="clank-page__title">{content.title}</h1>
          <p className="clank-page__subtitle">{content.subtitle}</p>
        </header>

        <section className="clank-page__chapter" aria-labelledby="clank-rules-heading">
          <div className="clank-page__chapter-header">
            <h2 className="clank-page__chapter-title" id="clank-rules-heading">
              {content.rulesHeading}
            </h2>
            <p className="clank-page__chapter-copy">{content.rulesIntro}</p>
          </div>

          <div className="clank-page__rules-grid">
            {content.ruleSections.map((section) => (
              <article className="clank-page__rule-card" key={section.title}>
                <div className="clank-page__rule-number">{section.number}</div>
                <h3 className="clank-page__rule-title">{section.title}</h3>
                <ul className="clank-page__rule-list">
                  {section.bullets.map((bullet) => (
                    <li className="clank-page__rule-item" key={bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="clank-page__chapter" aria-labelledby="clank-market-heading">
          <div className="clank-page__chapter-header">
            <h2 className="clank-page__chapter-title" id="clank-market-heading">
              {content.marketHeading}
            </h2>
            <p className="clank-page__chapter-copy">{content.marketIntro}</p>
          </div>

          <div className="clank-page__market-grid">
            {content.marketCards.map((card) => (
              <article className="clank-page__market-card" key={card.displayTerm}>
                <p className="clank-page__market-label">{content.marketLabel}</p>
                <h3 className="clank-page__market-title">{card.displayTerm}</h3>
                <ul className="clank-page__market-list">
                  {card.bullets.map((bullet) => (
                    <li className="clank-page__market-item" key={bullet}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default ClankPage;
