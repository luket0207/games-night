import { totalRickallContent } from '../pages/totalRickall/totalRickallContent';

export const externalLinks = {
  gamesNight: 'https://luket0207.github.io/games-night/',
  matrixGame: 'https://luket0207.github.io/matrix-game/',
};

export const appContent = {
  en: {
    common: {
      homeAriaLabel: 'Go to the homepage',
      languageAriaLabel: 'Switch language to Japanese',
    },
    home: {
      title: 'Games Night!',
      qrButton: 'QR Code',
      totalRickallButton: 'Total Rickall',
      matrixGameButton: 'Matrix Game',
      qrDialogTitle: 'Games Night QR Code',
      qrDialogDescription: 'Scan this code to open Games Night on your phone.',
      matrixDialogTitle: 'Matrix Game',
      matrixDialogDescription:
        'Scan the code or tap the link below to jump into Matrix Game.',
      matrixLinkLabel: 'Open Matrix Game',
      closeButton: 'Close',
    },
    totalRickall: totalRickallContent.en,
  },
  ja: {
    common: {
      homeAriaLabel: '\u30db\u30fc\u30e0\u30da\u30fc\u30b8\u306b\u623b\u308b',
      languageAriaLabel: '\u8a00\u8a9e\u3092\u82f1\u8a9e\u306b\u5207\u308a\u66ff\u3048\u308b',
    },
    home: {
      title: 'Games Night!',
      qrButton: 'QR\u30b3\u30fc\u30c9',
      totalRickallButton: '\u30c8\u30fc\u30bf\u30eb\u30fb\u30ea\u30c3\u30af\u30aa\u30fc\u30eb',
      matrixGameButton: '\u30de\u30c8\u30ea\u30c3\u30af\u30b9\u30b2\u30fc\u30e0',
      qrDialogTitle: 'Games Night QR\u30b3\u30fc\u30c9',
      qrDialogDescription:
        '\u3053\u306e\u30b3\u30fc\u30c9\u3092\u8aad\u307f\u53d6\u3063\u3066 Games Night \u3092\u958b\u3044\u3066\u304f\u3060\u3055\u3044\u3002',
      matrixDialogTitle: '\u30de\u30c8\u30ea\u30c3\u30af\u30b9\u30b2\u30fc\u30e0',
      matrixDialogDescription:
        'QR\u30b3\u30fc\u30c9\u3092\u8aad\u307f\u53d6\u308b\u304b\u3001\u4e0b\u306e\u30ea\u30f3\u30af\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30de\u30c8\u30ea\u30c3\u30af\u30b9\u30b2\u30fc\u30e0\u3092\u958b\u3044\u3066\u304f\u3060\u3055\u3044\u3002',
      matrixLinkLabel: '\u30de\u30c8\u30ea\u30c3\u30af\u30b9\u30b2\u30fc\u30e0\u3092\u958b\u304f',
      closeButton: '\u9589\u3058\u308b',
    },
    totalRickall: totalRickallContent.ja,
  },
};
