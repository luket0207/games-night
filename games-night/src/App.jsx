import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './app/AppShell';
import { appContent } from './app/appContent';
import HomePage from './pages/home/home';
import TotalRickallPage from './pages/totalRickall/totalRickall';
import './App.scss';

function App() {
  const [language, setLanguage] = useState('en');
  const content = appContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleToggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'ja' : 'en'));
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app-frame">
        <div className="app-shell">
          <Routes>
            <Route
              element={
                <AppShell
                  language={language}
                  labels={content.common}
                  onToggleLanguage={handleToggleLanguage}
                />
              }
            >
              <Route path="/" element={<HomePage content={content.home} />} />
              <Route
                path="/total-rickall"
                element={<TotalRickallPage content={content.totalRickall} />}
              />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
