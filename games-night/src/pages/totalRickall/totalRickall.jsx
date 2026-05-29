import './totalRickall.scss';

function TotalRickallPage({ content }) {
  return (
    <section className="total-rickall-page">
      <div className="total-rickall-page__stack">
        <header className="total-rickall-page__hero">
          {content.badge ? (
            <p className="total-rickall-page__badge">{content.badge}</p>
          ) : null}
          <h1 className="total-rickall-page__title">{content.title}</h1>
        </header>

        {content.sections.map((section) => (
          <section className="total-rickall-page__section" key={section.title}>
            <h2 className="total-rickall-page__section-title">{section.title}</h2>

            {section.bullets ? (
              <ul className="total-rickall-page__list">
                {section.bullets.map((item) => (
                  <li className="total-rickall-page__list-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {section.subsections ? (
              <div className="total-rickall-page__summary-grid">
                {section.subsections.map((subsection) => (
                  <article
                    className="total-rickall-page__summary-card"
                    key={subsection.title}
                  >
                    <h3 className="total-rickall-page__summary-title">
                      {subsection.title}
                    </h3>
                    <p className="total-rickall-page__summary-body">
                      {subsection.body}
                    </p>
                  </article>
                ))}
              </div>
            ) : null}

            {section.cards ? (
              <div className="total-rickall-page__translation-grid">
                {section.cards.map((card) => (
                  <article
                    className="total-rickall-page__translation-card"
                    key={card.englishName}
                  >
                    {card.image ? (
                      <div className="total-rickall-page__translation-image-frame">
                        <img
                          className="total-rickall-page__translation-image"
                          src={card.image.src}
                          alt={card.image.alt}
                        />
                      </div>
                    ) : null}

                    <div className="total-rickall-page__translation-block">
                      <p className="total-rickall-page__translation-label">
                        {content.cardLabels.englishCard}
                      </p>
                      <h3 className="total-rickall-page__translation-title">
                        {card.englishName}
                      </h3>
                    </div>

                    <div className="total-rickall-page__translation-block">
                      <p className="total-rickall-page__translation-label">
                        {content.cardLabels.japaneseName}
                      </p>
                      <p className="total-rickall-page__translation-value">
                        {card.japaneseName}
                      </p>
                    </div>

                    <div className="total-rickall-page__translation-block">
                      <p className="total-rickall-page__translation-label">
                        {content.cardLabels.japaneseEffect}
                      </p>
                      <p className="total-rickall-page__translation-value">
                        {card.effectText}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </section>
  );
}

export default TotalRickallPage;
