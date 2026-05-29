import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import ClankPage from './pages/clank/clank';
import { clankContent } from './pages/clank/clankContent';
import TotalRickallPage from './pages/totalRickall/totalRickall';
import { totalRickallContent } from './pages/totalRickall/totalRickallContent';

test('renders the homepage title', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Games Night!' })).toBeInTheDocument();
});

test('renders the English Clank rules and market guide', () => {
  render(<ClankPage content={clankContent.en} />);

  expect(screen.getByRole('heading', { name: 'Clank! Quick Rules' })).toBeInTheDocument();
  expect(screen.getByText('How the Game Works')).toBeInTheDocument();
  expect(screen.getByText('Market Card Guide')).toBeInTheDocument();
  expect(screen.getByText('Game objective')).toBeInTheDocument();
  expect(screen.getByText('Clank and the dragon bag')).toBeInTheDocument();
  expect(screen.getByText('Acquire effects / 獲得時効果')).toBeInTheDocument();
  expect(screen.getAllByText('Card element').length).toBeGreaterThan(0);
});

test('navigates to the Clank page and preserves language across pages', () => {
  window.history.pushState({}, '', '/');
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Clank!' }));
  expect(screen.getByRole('heading', { name: 'Clank! Quick Rules' })).toBeInTheDocument();
  expect(screen.getByText('Market Card Guide')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Switch language to Japanese' }));
  expect(
    screen.getByRole('heading', { name: 'クランク！かんたんルールガイド' })
  ).toBeInTheDocument();
  expect(screen.getByText('マーケットカード説明')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: 'ホームページに戻る' }));
  expect(screen.getByRole('heading', { name: 'Games Night!' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'クランク！' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'クランク！' }));
  expect(
    screen.getByRole('heading', { name: 'クランク！かんたんルールガイド' })
  ).toBeInTheDocument();
  expect(screen.getByText('装置 / Devices')).toBeInTheDocument();
});

test('renders the English Total Rickall instructions without translation cards', () => {
  render(<TotalRickallPage content={totalRickallContent.en} />);

  expect(
    screen.getByRole('heading', { name: 'Total Rickall Card Translations' })
  ).toBeInTheDocument();
  expect(screen.getByText('How to Play')).toBeInTheDocument();
  expect(
    screen.getByText(
      'Shooting a real character puts that real card into the fail area. We then deal out a new charater on to the board.'
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText('If 4 real characters are shot, the players lose.')
  ).toBeInTheDocument();
  expect(
    screen.queryByText('Coloured Cards / \u8272\u4ed8\u304d\u30ab\u30fc\u30c9')
  ).not.toBeInTheDocument();
  expect(screen.queryByAltText('Morty card')).not.toBeInTheDocument();
  expect(screen.queryByAltText('Rick card')).not.toBeInTheDocument();
});

test('renders the Japanese Total Rickall sections and card translations', () => {
  expect(totalRickallContent.ja.title).toBe(
    '\u30c8\u30fc\u30bf\u30eb\u30fb\u30ea\u30c3\u30af\u30aa\u30fc\u30eb\uff1a\u30ab\u30fc\u30c9\u7ffb\u8a33'
  );
  expect(totalRickallContent.ja.sections[1].title).toBe(
    '\u8272\u306b\u3064\u3044\u3066'
  );
  expect(totalRickallContent.ja.sections[1].bullets[0]).toBe(
    '\u003c\u8272\u003e\u0020\u003d\u0020\u305d\u306e\u30ab\u30fc\u30c9\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u8272'
  );
  expect(totalRickallContent.ja.sections[1].bullets).not.toContain(
    '\u305f\u3068\u3048\u3070\u3001\u305d\u306e\u30ab\u30fc\u30c9\u304c\u8d64\u306a\u3089\u3001\u8d64\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306b\u3060\u3051\u4f7f\u3044\u307e\u3059\u3002'
  );
  expect(totalRickallContent.ja.sections[5].cards[0].japaneseName).toBe(
    '\u30e2\u30fc\u30c6\u30a3'
  );
  expect(totalRickallContent.ja.sections[5].cards[0].effectText).toContain(
    '\u003c\u8272\u003e'
  );
  expect(totalRickallContent.ja.sections[5].cards[0].effectText).not.toContain(
    '\u003ccolour\u003e'
  );
  expect(totalRickallContent.ja.sections[2].subsections[1].body).toContain(
    '\u65b0\u3057\u3044\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0031\u4eba\u3092\u5834\u306b\u8ffd\u52a0\u3057\u307e\u3059'
  );
  expect(totalRickallContent.ja.cardLabels.englishCard).toBe(
    '\u82f1\u8a9e\u30ab\u30fc\u30c9\u540d'
  );
  expect(totalRickallContent.ja.cardLabels.japaneseName).toBe(
    '\u65e5\u672c\u8a9e\u30ab\u30fc\u30c9\u540d'
  );
  expect(totalRickallContent.ja.cardLabels.japaneseEffect).toBe(
    '\u65e5\u672c\u8a9e\u52b9\u679c\u30c6\u30ad\u30b9\u30c8'
  );
  expect(totalRickallContent.ja.sections[5].title).toBe(
    '\u8272\u4ed8\u304d\u30ab\u30fc\u30c9'
  );
  expect(totalRickallContent.ja.sections[5].cards).toHaveLength(5);
  expect(totalRickallContent.ja.sections[5].cards[0].image.alt).toBe('Morty card');
  expect(totalRickallContent.ja.sections[6].title).toBe(
    '\u8272\u306a\u3057\u30ab\u30fc\u30c9'
  );
  expect(totalRickallContent.ja.sections[6].cards).toHaveLength(7);
  expect(totalRickallContent.ja.sections[6].cards[0].image.alt).toBe('Rick card');

  render(<TotalRickallPage content={totalRickallContent.ja} />);

  expect(screen.getByText('Morty')).toBeInTheDocument();
  expect(screen.getByText('Rick')).toBeInTheDocument();
  expect(screen.getAllByText('\u82f1\u8a9e\u30ab\u30fc\u30c9\u540d').length).toBeGreaterThan(0);
  expect(screen.getAllByText('\u65e5\u672c\u8a9e\u30ab\u30fc\u30c9\u540d').length).toBeGreaterThan(0);
  expect(
    screen.getAllByText('\u65e5\u672c\u8a9e\u52b9\u679c\u30c6\u30ad\u30b9\u30c8').length
  ).toBeGreaterThan(0);
  expect(screen.getByText('\u8272\u4ed8\u304d\u30ab\u30fc\u30c9')).toBeInTheDocument();
  expect(screen.getByText('\u8272\u306a\u3057\u30ab\u30fc\u30c9')).toBeInTheDocument();
  expect(
    screen.queryByText(
      '\u305f\u3068\u3048\u3070\u3001\u305d\u306e\u30ab\u30fc\u30c9\u304c\u8d64\u306a\u3089\u3001\u8d64\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306b\u3060\u3051\u4f7f\u3044\u307e\u3059\u3002'
    )
  ).not.toBeInTheDocument();
  expect(screen.queryByText('Coloured Cards / \u8272\u4ed8\u304d\u30ab\u30fc\u30c9')).not.toBeInTheDocument();
  expect(
    screen.queryByText('Non-Coloured Cards / \u8272\u306a\u3057\u30ab\u30fc\u30c9')
  ).not.toBeInTheDocument();
  expect(screen.getByAltText('Morty card')).toBeInTheDocument();
  expect(screen.getByAltText('Beth card')).toBeInTheDocument();
  expect(screen.getByAltText('Jerry card')).toBeInTheDocument();
  expect(screen.getByAltText('Summer card')).toBeInTheDocument();
  expect(
    screen.getByAltText("I've Known You For 15 Years card")
  ).toBeInTheDocument();
  expect(screen.getByAltText('Rick card')).toBeInTheDocument();
  expect(screen.getByAltText("You Can't Kill Me card")).toBeInTheDocument();
  expect(screen.getByAltText('Mr. Poopybutthole card')).toBeInTheDocument();
  expect(screen.getByAltText('Is Something Wrong, Beth? card')).toBeInTheDocument();
  expect(
    screen.getByAltText('I Tried to Shoot Summer 10 Minutes Ago card')
  ).toBeInTheDocument();
  expect(screen.getByAltText('Bitch of a Sister card')).toBeInTheDocument();
  expect(screen.getByAltText('Me Too card')).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(12);

  const mortyCard = screen.getByText('Morty').closest('article');
  const bethCard = screen.getByText('Beth').closest('article');
  const rickCard = screen.getByText('Rick').closest('article');

  expect(mortyCard).not.toBeNull();
  expect(bethCard).not.toBeNull();
  expect(rickCard).not.toBeNull();

  expect(within(mortyCard).getByAltText('Morty card')).toBeInTheDocument();
  expect(within(bethCard).getByAltText('Beth card')).toBeInTheDocument();
  expect(within(rickCard).getByAltText('Rick card')).toBeInTheDocument();
});
