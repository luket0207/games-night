import './totalRickall.scss';

function TotalRickallPage({ content }) {
  return (
    <section className="total-rickall-page">
      <div className="total-rickall-page__card">
        <p className="total-rickall-page__badge">{content.badge}</p>
        <h1 className="total-rickall-page__title">{content.title}</h1>
        <p className="total-rickall-page__description">{content.description}</p>
      </div>
    </section>
  );
}

export default TotalRickallPage;
