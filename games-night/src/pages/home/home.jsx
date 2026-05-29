import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { externalLinks } from '../../app/appContent';
import './home.scss';

function HomePage({ content }) {
  const navigate = useNavigate();
  const [activeDialog, setActiveDialog] = useState(null);

  const closeDialog = () => {
    setActiveDialog(null);
  };

  const createDialogFooter = (closeLabel) => (
    <div className="home-page__dialog-footer">
      <Button
        className="home-page__dialog-close"
        label={closeLabel}
        onClick={closeDialog}
        type="button"
      />
    </div>
  );

  return (
    <section className="home-page">
      <div aria-hidden="true" className="home-page__texture" />

      <div className="home-page__panel">
        <h1 className="home-page__title">{content.title}</h1>

        <div className="home-page__actions">
          <Button
            className="home-page__action home-page__action--qr"
            label={content.qrButton}
            onClick={() => setActiveDialog('qr')}
            type="button"
          />
          <Button
            className="home-page__action home-page__action--rickall"
            label={content.totalRickallButton}
            onClick={() => navigate('/total-rickall')}
            type="button"
          />
          <Button
            className="home-page__action home-page__action--clank"
            label={content.clankButton}
            onClick={() => navigate('/clank')}
            type="button"
          />
          <Button
            className="home-page__action home-page__action--matrix"
            label={content.matrixGameButton}
            onClick={() => setActiveDialog('matrix')}
            type="button"
          />
        </div>
      </div>

      <Dialog
        className="home-page__dialog"
        dismissableMask
        draggable={false}
        footer={createDialogFooter(content.closeButton)}
        header={content.qrDialogTitle}
        onHide={closeDialog}
        visible={activeDialog === 'qr'}
      >
        <div className="home-page__dialog-content">
          <QRCodeSVG includeMargin size={184} value={externalLinks.gamesNight} />
          <p>{content.qrDialogDescription}</p>
        </div>
      </Dialog>

      <Dialog
        className="home-page__dialog"
        dismissableMask
        draggable={false}
        footer={createDialogFooter(content.closeButton)}
        header={content.matrixDialogTitle}
        onHide={closeDialog}
        visible={activeDialog === 'matrix'}
      >
        <div className="home-page__dialog-content">
          <QRCodeSVG includeMargin size={184} value={externalLinks.matrixGame} />
          <p>{content.matrixDialogDescription}</p>
          <a
            className="home-page__dialog-link"
            href={externalLinks.matrixGame}
            rel="noreferrer"
            target="_blank"
          >
            {content.matrixLinkLabel}
          </a>
        </div>
      </Dialog>
    </section>
  );
}

export default HomePage;
