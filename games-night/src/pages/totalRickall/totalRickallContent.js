import bethImage from '../../assets/images/totalRickall/beth.jpeg';
import bitchOfASisterImage from '../../assets/images/totalRickall/bitch-of-a-sister.jpeg';
import iTriedToShootSummerImage from '../../assets/images/totalRickall/i-tried-to-shoot-summer-15-minutes-ago.jpeg';
import isSomethingWrongBethImage from '../../assets/images/totalRickall/is-something-wrong-beth.jpeg';
import iveKnownYouFor15YearsImage from '../../assets/images/totalRickall/ive-known-you-for-15-years.jpeg';
import jerryImage from '../../assets/images/totalRickall/jerry.jpeg';
import meTooImage from '../../assets/images/totalRickall/me-too.jpeg';
import mortyImage from '../../assets/images/totalRickall/morty.jpeg';
import mrPoopybuttholeImage from '../../assets/images/totalRickall/mr-poopybutthole.jpeg';
import rickImage from '../../assets/images/totalRickall/rick.jpeg';
import summerImage from '../../assets/images/totalRickall/summer.jpeg';
import youCantKillMeImage from '../../assets/images/totalRickall/you-cant-kill-me.jpeg';

const cardLabels = {
  englishCard: '\u82f1\u8a9e\u30ab\u30fc\u30c9\u540d',
  japaneseName: '\u65e5\u672c\u8a9e\u30ab\u30fc\u30c9\u540d',
  japaneseEffect: '\u65e5\u672c\u8a9e\u52b9\u679c\u30c6\u30ad\u30b9\u30c8',
};

export const totalRickallContent = {
  en: {
    badge: 'How to play',
    title: 'Total Rickall Card Translations',
    sections: [
      {
        title: 'How to Play',
        bullets: [
          'The players are working together to find and eliminate every parasite on the board.',
          'Each character has a hidden identity card that shows whether that character is real or a parasite.',
          'Each round, every player chooses 1 action card from their hand and places it face down.',
          'Once everyone is ready, all action cards are revealed together.',
          'Starting with the start player, resolve the card effects clockwise around the table.',
        ],
      },
      {
        title: 'Checking Identities and Shooting',
        bullets: [
          'Some cards let players secretly check identity cards.',
          'Some cards let players shoot characters.',
          'Shooting a parasite is good.',
          'Shooting a real character puts that real card into the fail area. We then deal out a new charater on to the board.',
          'If 4 real characters are shot, the players lose.',
        ],
      },
      {
        title: 'End of the Round',
        bullets: [
          'After the effects resolve, discard the action cards that were played.',
          'Move the start player marker to the player on the left.',
          'Add 1 new character and 1 new identity card to the board.',
        ],
      },
      {
        title: 'Ending the Game',
        bullets: [
          'Any player can declare the end of the game when they think no parasites remain.',
          'If more than half the players agree, reveal all of the identity cards on the board.',
          'If no parasites remain, all players win.',
        ],
      },
    ],
  },
  ja: {
    badge: '\u30eb\u30fc\u30eb\u3068\u30ab\u30fc\u30c9\u7ffb\u8a33',
    title:
      '\u30c8\u30fc\u30bf\u30eb\u30fb\u30ea\u30c3\u30af\u30aa\u30fc\u30eb\uff1a\u30ab\u30fc\u30c9\u7ffb\u8a33',
    cardLabels,
    sections: [
      {
        title: '\u7c21\u5358\u306a\u30eb\u30fc\u30eb\u8aac\u660e',
        bullets: [
          '\u3053\u306e\u30b2\u30fc\u30e0\u3067\u306f\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u5168\u54e1\u3067\u5354\u529b\u3057\u3066\u3001\u5834\u306b\u51fa\u3066\u3044\u308b\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u4e2d\u304b\u3089\u300c\u5bc4\u751f\u751f\u7269\u300d\u3092\u898b\u3064\u3051\u3066\u5012\u3057\u307e\u3059\u3002',
          '\u5404\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u4e0b\u306b\u306f\u3001\u88cf\u5411\u304d\u306e\u6b63\u4f53\u30ab\u30fc\u30c9\u304c\u3042\u308a\u307e\u3059\u3002',
          '\u6b63\u4f53\u30ab\u30fc\u30c9\u306b\u306f\u3001\u305d\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u304c\u672c\u7269\u306a\u306e\u304b\u3001\u5bc4\u751f\u751f\u7269\u306a\u306e\u304b\u304c\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002',
          '\u6bce\u30e9\u30a6\u30f3\u30c9\u3001\u5404\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u624b\u672d\u304b\u3089\u30a2\u30af\u30b7\u30e7\u30f3\u30ab\u30fc\u30c9\u3092\u0031\u679a\u9078\u3073\u3001\u88cf\u5411\u304d\u3067\u51fa\u3057\u307e\u3059\u3002',
          '\u5168\u54e1\u304c\u51fa\u3057\u305f\u3089\u3001\u540c\u6642\u306b\u8868\u306b\u3057\u3066\u3001\u30b9\u30bf\u30fc\u30c8\u30d7\u30ec\u30a4\u30e4\u30fc\u304b\u3089\u6642\u8a08\u56de\u308a\u306b\u30ab\u30fc\u30c9\u306e\u52b9\u679c\u3092\u4f7f\u3044\u307e\u3059\u3002',
        ],
      },
      {
        title: '\u8272\u306b\u3064\u3044\u3066',
        bullets: [
          '\u003c\u8272\u003e\u0020\u003d\u0020\u305d\u306e\u30ab\u30fc\u30c9\u306b\u66f8\u304b\u308c\u3066\u3044\u308b\u8272',
          '\u8272\u4ed8\u304d\u30ab\u30fc\u30c9\u306f\u3001\u540c\u3058\u8272\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306b\u3057\u304b\u4f7f\u3048\u307e\u305b\u3093\u3002',
          '\u8272\u306a\u3057\u30ab\u30fc\u30c9\u306f\u3001\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u8272\u306b\u95a2\u4fc2\u306a\u304f\u4f7f\u3048\u307e\u3059\u3002',
        ],
      },
      {
        title: '\u30ab\u30fc\u30c9\u52b9\u679c\u306e\u307e\u3068\u3081',
        subsections: [
          {
            title: '\u6b63\u4f53\u3092\u898b\u308b',
            body: '\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u6b63\u4f53\u30ab\u30fc\u30c9\u3092\u3053\u3063\u305d\u308a\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002',
          },
          {
            title: '\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u6483\u3064',
            body: '\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3092\u6483\u3061\u3001\u305d\u306e\u6b63\u4f53\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u6483\u3063\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u304c\u5bc4\u751f\u751f\u7269\u306a\u3089\u6210\u529f\u3067\u3059\u3002\u6483\u3063\u305f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u304c\u672c\u7269\u3060\u3063\u305f\u5834\u5408\u3001\u305d\u306e\u672c\u7269\u30ab\u30fc\u30c9\u306f\u5931\u6557\u7f6e\u304d\u5834\u306b\u7f6e\u304b\u308c\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u65b0\u3057\u3044\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0031\u4eba\u3092\u5834\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u672c\u7269\u3092\u0034\u4eba\u6483\u3063\u3066\u3057\u307e\u3046\u3068\u3001\u30b2\u30fc\u30e0\u306b\u8ca0\u3051\u307e\u3059\u3002',
          },
        ],
      },
      {
        title: '\u30e9\u30a6\u30f3\u30c9\u7d42\u4e86\u5f8c',
        bullets: [
          '\u30e9\u30a6\u30f3\u30c9\u304c\u7d42\u308f\u3063\u305f\u3089\u3001\u51fa\u3057\u305f\u30a2\u30af\u30b7\u30e7\u30f3\u30ab\u30fc\u30c9\u3092\u6368\u3066\u3001\u30b9\u30bf\u30fc\u30c8\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u5de6\u306b\u79fb\u3057\u307e\u3059\u3002',
          '\u305d\u306e\u5f8c\u3001\u65b0\u3057\u3044\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0031\u4eba\u3068\u6b63\u4f53\u30ab\u30fc\u30c9\u0031\u679a\u3092\u5834\u306b\u8ffd\u52a0\u3057\u3066\u3001\u6b21\u306e\u30e9\u30a6\u30f3\u30c9\u3092\u59cb\u3081\u307e\u3059\u3002',
        ],
      },
      {
        title: '\u30b2\u30fc\u30e0\u306e\u7d42\u308f\u308a\u65b9',
        bullets: [
          '\u5834\u306b\u3044\u308b\u5bc4\u751f\u751f\u7269\u304c\u5168\u54e1\u3044\u306a\u304f\u306a\u3063\u305f\u3068\u601d\u3063\u305f\u3089\u3001\u8ab0\u3067\u3082\u30b2\u30fc\u30e0\u7d42\u4e86\u3092\u5ba3\u8a00\u3067\u304d\u307e\u3059\u3002',
          '\u534a\u5206\u4ee5\u4e0a\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u540c\u610f\u3057\u305f\u3089\u3001\u5834\u306e\u6b63\u4f53\u30ab\u30fc\u30c9\u3092\u3059\u3079\u3066\u516c\u958b\u3057\u307e\u3059\u3002',
          '\u5bc4\u751f\u751f\u7269\u304c\u0031\u4eba\u3082\u6b8b\u3063\u3066\u3044\u306a\u3051\u308c\u3070\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u5168\u54e1\u306e\u52dd\u3061\u3067\u3059\u3002',
        ],
      },
      {
        title: '\u8272\u4ed8\u304d\u30ab\u30fc\u30c9',
        cards: [
          {
            englishName: 'Morty',
            japaneseName: '\u30e2\u30fc\u30c6\u30a3',
            image: { src: mortyImage, alt: 'Morty card' },
            effectText:
              '\u003c\u8272\u003e\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0031\u4eba\u306e\u6b63\u4f53\u30ab\u30fc\u30c9\u3092\u3053\u3063\u305d\u308a\u898b\u308b\u3002',
          },
          {
            englishName: 'Beth',
            japaneseName: '\u30d9\u30b9',
            image: { src: bethImage, alt: 'Beth card' },
            effectText:
              '\u003c\u8272\u003e\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0031\u4eba\u3092\u6483\u3064\u3002',
          },
          {
            englishName: 'Jerry',
            japaneseName: '\u30b8\u30a7\u30ea\u30fc',
            image: { src: jerryImage, alt: 'Jerry card' },
            effectText:
              '\u5834\u306b\u51fa\u3066\u3044\u308b\u003c\u8272\u003e\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u5168\u54e1\u306e\u6b63\u4f53\u30ab\u30fc\u30c9\u3092\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u3001\u3082\u3046\u4e00\u5ea6\u914d\u308a\u76f4\u3059\u3002\u305d\u306e\u5f8c\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u0031\u4eba\u3092\u9078\u3076\u3002\u305d\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u30ab\u30fc\u30c9\u3092\u0031\u679a\u5f15\u304f\u3002',
          },
          {
            englishName: 'Summer',
            japaneseName: '\u30b5\u30de\u30fc',
            image: { src: summerImage, alt: 'Summer card' },
            effectText:
              '\u003c\u8272\u003e\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0032\u4eba\u306e\u6b63\u4f53\u30ab\u30fc\u30c9\u3092\u3053\u3063\u305d\u308a\u898b\u308b\u3002\u305d\u306e\u5f8c\u3001\u305d\u306e\u0032\u679a\u306e\u6b63\u4f53\u30ab\u30fc\u30c9\u3092\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u3001\u3082\u3046\u4e00\u5ea6\u914d\u308a\u76f4\u3059\u3002',
          },
          {
            englishName: "I've Known You For 15 Years",
            japaneseName: '\u0031\u0035\u5e74\u9593\u3082\u77e5\u3063\u3066\u308b\u3093\u3060\u305e',
            image: {
              src: iveKnownYouFor15YearsImage,
              alt: "I've Known You For 15 Years card",
            },
            effectText:
              '\u003c\u8272\u003e\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0031\u4eba\u306e\u6b63\u4f53\u30ab\u30fc\u30c9\u3092\u516c\u958b\u3057\u3001\u30b2\u30fc\u30e0\u7d42\u4e86\u307e\u3067\u8868\u5411\u304d\u306e\u307e\u307e\u306b\u3059\u308b\u3002\u4ed6\u306e\u30ab\u30fc\u30c9\u306e\u52b9\u679c\u3067\u30b7\u30e3\u30c3\u30d5\u30eb\u3055\u308c\u308b\u6642\u3082\u3001\u305d\u306e\u30ab\u30fc\u30c9\u306f\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u306a\u3044\u3002',
          },
        ],
      },
      {
        title: '\u8272\u306a\u3057\u30ab\u30fc\u30c9',
        cards: [
          {
            englishName: 'Rick',
            japaneseName: '\u30ea\u30c3\u30af',
            image: { src: rickImage, alt: 'Rick card' },
            effectText:
              '\u6b63\u4f53\u30ab\u30fc\u30c9\u306e\u5c71\u672d\u306e\u4e00\u756a\u4e0a\u306e\u30ab\u30fc\u30c9\u3092\u3053\u3063\u305d\u308a\u898b\u308b\u3002',
          },
          {
            englishName: "You Can't Kill Me",
            japaneseName: '\u304a\u524d\u306b\u4ffa\u306f\u6bba\u305b\u306a\u3044',
            image: { src: youCantKillMeImage, alt: "You Can't Kill Me card" },
            effectText:
              '\u4ed6\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u0031\u4eba\u9078\u3076\u3002\u305d\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0031\u4eba\u3092\u6483\u305f\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002',
          },
          {
            englishName: 'Mr. Poopybutthole',
            japaneseName: '\u30df\u30b9\u30bf\u30fc\u30fb\u30d7\u30fc\u30d4\u30fc\u30d0\u30c3\u30c8\u30db\u30fc\u30eb',
            image: { src: mrPoopybuttholeImage, alt: 'Mr. Poopybutthole card' },
            effectText:
              '\u3053\u306e\u30e9\u30a6\u30f3\u30c9\u4e2d\u306b\u8ab0\u3082\u6483\u305f\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u3001\u30e9\u30a6\u30f3\u30c9\u7d42\u4e86\u6642\u306b\u5404\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u30ab\u30fc\u30c9\u3092\u0031\u679a\u5f15\u304f\u3002',
          },
          {
            englishName: 'Is Something Wrong, Beth?',
            japaneseName: '\u3069\u3046\u304b\u3057\u305f\u306e\u3001\u30d9\u30b9\uff1f',
            image: {
              src: isSomethingWrongBethImage,
              alt: 'Is Something Wrong, Beth? card',
            },
            effectText:
              '\u3053\u306e\u30ab\u30fc\u30c9\u304c\u624b\u672d\u306b\u3042\u308b\u5834\u5408\u3001\u6b21\u306b\u5fc5\u305a\u3053\u306e\u30ab\u30fc\u30c9\u3092\u51fa\u3055\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0031\u4eba\u3092\u6483\u3064\u3002',
          },
          {
            englishName: 'I Tried to Shoot Summer 10 Minutes Ago',
            japaneseName: '\u0031\u0030\u5206\u524d\u306b\u30b5\u30de\u30fc\u3092\u6483\u3068\u3046\u3068\u3057\u305f',
            image: {
              src: iTriedToShootSummerImage,
              alt: 'I Tried to Shoot Summer 10 Minutes Ago card',
            },
            effectText:
              '\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0031\u4eba\u3092\u6483\u3064\u3002\u305d\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u304c\u672c\u7269\u3060\u3063\u305f\u5834\u5408\u3001\u305d\u306e\u6b63\u4f53\u30ab\u30fc\u30c9\u3092\u5931\u6557\u7f6e\u304d\u5834\u306b\u7f6e\u304f\u3002\u305f\u3060\u3057\u3001\u624b\u672d\u304b\u3089\u30e9\u30f3\u30c0\u30e0\u306b\u30ab\u30fc\u30c9\u3092\u6368\u3066\u305a\u3001\u65b0\u3057\u3044\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3082\u5834\u306b\u8ffd\u52a0\u3057\u306a\u3044\u3002',
          },
          {
            englishName: 'Bitch of a Sister',
            japaneseName: '\u30af\u30bd\u59c9\u8cb4',
            image: { src: bitchOfASisterImage, alt: 'Bitch of a Sister card' },
            effectText:
              '\u5834\u306b\u51fa\u3066\u3044\u308b\u8272\u3092\u0031\u3064\u9078\u3076\u3002\u305d\u306e\u8272\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u0032\u4eba\u3092\u6483\u3064\u3002',
          },
          {
            englishName: 'Me Too',
            japaneseName: '\u4ffa\u3082',
            image: { src: meTooImage, alt: 'Me Too card' },
            effectText:
              '\u81ea\u5206\u306e\u53f3\u96a3\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u51fa\u3057\u305f\u30ab\u30fc\u30c9\u306e\u52b9\u679c\u3092\u30b3\u30d4\u30fc\u3059\u308b\u3002',
          },
        ],
      },
    ],
  },
};
