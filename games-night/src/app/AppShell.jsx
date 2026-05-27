import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import './appShell.scss';

function AppShell({ language, labels, onToggleLanguage }) {
  return (
    <div className="app-shell-layout">
      <div className="app-shell-layout__controls">
        <Link
          aria-label={labels.homeAriaLabel}
          className="app-shell-layout__icon-button"
          to="/"
        >
          <FontAwesomeIcon icon={faHouse} />
        </Link>

        <button
          aria-label={labels.languageAriaLabel}
          className="app-shell-layout__icon-button app-shell-layout__icon-button--language"
          onClick={onToggleLanguage}
          type="button"
        >
          <FontAwesomeIcon icon={faLanguage} />
          <span className="app-shell-layout__language-code">
            {language === 'en' ? 'JP' : 'EN'}
          </span>
        </button>
      </div>

      <Outlet />
    </div>
  );
}

export default AppShell;
